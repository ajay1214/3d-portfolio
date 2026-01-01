"use client";

import { useState, useEffect, useCallback } from "react";

import dynamic from "next/dynamic";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFViewer = dynamic(
  async () => {
    const pdfjsVersion = "3.11.174";

    const { Viewer, Worker } = await import("@react-pdf-viewer/core");
    const { defaultLayoutPlugin } = await import(
      "@react-pdf-viewer/default-layout"
    );

    const Component = ({ url }: { url: string }) => {
      const defaultLayoutPluginInstance = defaultLayoutPlugin();
      const [scale, setScale] = useState(1.3);

      const calculateScale = useCallback(
        () => (window.innerWidth < 768 ? 0.65 : 1.3),
        []
      );

      useEffect(() => {
        setScale(calculateScale());
        const onResize = () => setScale(calculateScale());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
      }, [calculateScale]);

      return (
        <div className="h-screen w-screen">
          <Worker
            workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`}
          >
            <Viewer
              fileUrl={url}
              defaultScale={scale}
              theme="dark"
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </div>
      );
    };

    return Component;
  },
  { ssr: false }
);

const PdfViewer = ({
  url = "/assets/Ajay_Bind_Resume.pdf",
}: {
  url?: string;
}) => {
  return <PDFViewer url={url} />;
};

export default PdfViewer;
