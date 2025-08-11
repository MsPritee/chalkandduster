import React, { useMemo, useState } from 'react';

interface PdfViewerProps {
    url: string;
    title?: string;
    height?: number | string;
    useGoogleViewer?: boolean; // initial preference
}

const PdfViewer: React.FC<PdfViewerProps> = ({
    url,
    title = 'PDF Viewer',
    height = 700,
    useGoogleViewer = true,
}) => {
    const [mode, setMode] = useState<'google' | 'direct'>(useGoogleViewer ? 'google' : 'direct');

    const frameSrc = useMemo(() => {
        if (mode === 'google') {
            return `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(url)}`;
        }
        return url;
    }, [mode, url]);

    const resolvedHeight = typeof height === 'number' ? `${height}px` : height;

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                <div className="flex items-center gap-2">
                    {/* <div className="inline-flex rounded-md overflow-hidden border border-gray-300">
            <button
              type="button"
              onClick={() => setMode('google')}
              className={`px-3 py-1.5 text-sm font-medium ${mode === 'google' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              title="Use Google Docs viewer"
            >
              Google
            </button>
            <button
              type="button"
              onClick={() => setMode('direct')}
              className={`px-3 py-1.5 text-sm font-medium ${mode === 'direct' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              title="Embed PDF directly"
            >
              Direct
            </button>
          </div> */}
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="px-3 py-1.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                        title="Open in new tab"
                    >
                        Open
                    </a>
                    <a
                        href={url}
                        download
                        className="px-3 py-1.5 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                        title="Download PDF"
                    >
                        Download
                    </a>
                </div>
            </div>

            {/* <div className="w-full border rounded-lg overflow-hidden bg-white">
        <iframe
          key={mode}
          src={frameSrc}
          title={title}
          style={{ width: '100%', height: resolvedHeight, border: '0' }}
          allowFullScreen
        />
      </div> */}

            {/* <p className="mt-2 text-xs text-gray-500">
        If the PDF does not load, switch between <span className="font-medium">Google</span> and <span className="font-medium">Direct</span> above.
        Some hosts block embedding (X-Frame-Options/CSP). In that case, use Open, or host the PDF on a service that allows embedding.
      </p> */}
        </div>
    );
};

export default PdfViewer;
