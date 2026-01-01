"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFViewer = dynamic(
  async () => {
    const pdfjsVersion = "3.11.174";

    const { Viewer } = await import("@react-pdf-viewer/core");
    const { defaultLayoutPlugin } = await import(
      "@react-pdf-viewer/default-layout"
    );

    // ⬇️ This is OK now because canvas is aliased out
    const pdfjs = await import("pdfjs-dist/legacy/build/pdf");
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`;

    const Component = ({ url }: { url: string }) => {
      const defaultLayoutPluginInstance = defaultLayoutPlugin();
      const [scale, setScale] = useState(1.3);

      const calculateScale = useCallback(
        () => (window.innerWidth < 768 ? 0.65 : 1.3),
        []
      );

      useEffect(() => {
        setScale(calculateScale());
        window.addEventListener("resize", () =>
          setScale(calculateScale())
        );
        return () =>
          window.removeEventListener("resize", () =>
            setScale(calculateScale())
          );
      }, [calculateScale]);

      return (
        <div className="h-screen w-screen">
          <Viewer
            fileUrl={url}
            defaultScale={scale}
            theme="dark"
            plugins={[defaultLayoutPluginInstance]}
          />
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
