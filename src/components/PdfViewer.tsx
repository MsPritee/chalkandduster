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
  const [hasError, setHasError] = useState(false);

  // const frameSrc = useMemo(() => {
  //   if (mode === 'google') {
  //     // Extract file ID from Google Drive URL if it's a sharing link
  //     let fileId = url;
  //     if (url.includes('drive.google.com/file/d/')) {
  //       const match = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
  //       if (match) {
  //         fileId = match[1];
  //       }
  //     }
  //     return `https://docs.google.com/gview?embedded=1&url=https://drive.google.com/uc?export=download&id=${encodeURIComponent(fileId)}`;
  //   }
  //   return url;
  // }, [mode, url]);

  const frameSrc = useMemo(() => {
    if (mode === 'google') {
      // Extract file ID from Google Drive URL if it's a sharing link
      let fileId = url;
      if (url.includes('drive.google.com/file/d/')) {
        const match = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
        if (match) {
          fileId = match[1];
        }
      }
      return `https://drive.google.com/file/d/${encodeURIComponent(fileId)}/preview`;
    }
    return url;
  }, [mode, url]);
  


  const resolvedHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-md overflow-hidden border border-gray-300">
            {/* <button
              type="button"
              onClick={() => setMode('google')}
              className={`px-3 py-1.5 text-sm font-medium ${mode === 'google' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              title="Use Google Docs viewer"
            >
              Google
            </button> */}
            {/* <button
              type="button"
              onClick={() => setMode('direct')}
              className={`px-3 py-1.5 text-sm font-medium ${mode === 'direct' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              title="Embed PDF directly"
            >
              Direct
            </button> */}
          </div>
          {/* <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="px-3 py-1.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
            title="Open in new tab"
          >
            Open
          </a> */}
          <a
            href={url}
            target="_blank"
            download
            className="px-3 py-1.5 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            title="Download PDF"
          >
            Download
          </a>
        </div>
      </div>

      <div className="w-full border rounded-lg overflow-hidden bg-white">
        {hasError ? (
          <div className="flex items-center justify-center" style={{ height: resolvedHeight }}>
            <div className="text-center p-8">
              <div className="text-red-500 text-lg mb-2">⚠️ PDF Failed to Load</div>
              <p className="text-gray-600 mb-4">The PDF could not be displayed. This might be due to:</p>
              <ul className="text-sm text-gray-500 text-left mb-4">
                <li>• File permissions or access restrictions</li>
                <li>• Network connectivity issues</li>
                <li>• Browser security policies</li>
              </ul>
              <div className="space-x-2">
                <button
                  onClick={() => setHasError(false)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Try Again
                </button>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Open in New Tab
                </a>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            key={mode}
            src={frameSrc}
            title={title}
            style={{ width: '100%', height: resolvedHeight, border: '0' }}
            allowFullScreen
            onError={() => setHasError(true)}
            onLoad={() => setHasError(false)}
          />
        )}
      </div>

      <p className="mt-2 text-xs text-gray-500">
        If the PDF does not load, switch between <span className="font-medium">Google</span> and <span className="font-medium">Direct</span> above.
        Some hosts block embedding (X-Frame-Options/CSP). In that case, use Open, or host the PDF on a service that allows embedding.
      </p>
    </div>
  );
};

export default PdfViewer;
