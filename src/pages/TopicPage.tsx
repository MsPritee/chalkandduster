import { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import topicDetails from "../data/topicDetails";
import CodeBlock from "../components/CodeBlock";
import PdfViewer from "../components/PdfViewer";

export default function TopicPage() {
  const { topic } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const topicData = topicDetails[topic as keyof typeof topicDetails];
  const initialSub = searchParams.get("sub");
  const [selectedSub, setSelectedSub] = useState<string | null>(initialSub);

  // Keep selected subtopic in sync with the URL (?sub=key)
  useEffect(() => {
    const sub = searchParams.get("sub");
    if (sub !== selectedSub) {
      setSelectedSub(sub);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  if (!topicData) {
    return <div className="text-center text-xl text-red-500">Topic Not Found</div>;
  }
  const Icon = topicData.icon;

  // If subtopics exist, show list and details
  if ('subtopics' in topicData && Array.isArray(topicData.subtopics)) {
    const subtopic = topicData.subtopics.find((s: any) => s.key === selectedSub);
    return (
      <div className="py-16">
        <div className="container-custom">
          <button
            className="mb-6 text-indigo-600 hover:underline"
            onClick={() => navigate("/notes")}
          >
            ← Back to Topics
          </button>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-50 rounded-lg">
                <Icon className="h-8 w-8 text-indigo-600" />
              </div>
              <h1 className="text-3xl font-bold">{topicData.title}</h1>
            </div>
            <p className="text-gray-600 text-lg">{topicData.description}</p>
            <hr className="my-6" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Practicals</h2>
              <div className="flex flex-wrap gap-4 mb-8">
                {topicData.subtopics.map((sub: any) => (
                  <button
                    key={sub.key}
                    onClick={() => {
                      setSelectedSub(sub.key);
                      setSearchParams((prev) => {
                        const sp = new URLSearchParams(prev);
                        sp.set("sub", sub.key);
                        return sp;
                      });
                    }}
                    className={`px-4 py-2 rounded-lg border ${selectedSub === sub.key ? "bg-indigo-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
                  >
                    {sub.title}
                  </button>
                ))}
              </div>
              {subtopic && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">{subtopic.title}</h3>
                  <p className="mb-4 text-gray-700">{subtopic.description}</p>
                  {subtopic.table && (
                    <div className="mb-6">
                      <h4 className="font-bold mb-3 text-lg">Connection Details:</h4>
                      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gradient-to-r from-indigo-500 to-purple-600">
                            <tr>
                              {subtopic.table[0].map((header: string, idx: number) => (
                                <th key={idx} className={`px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider ${
                                  idx === 0 ? 'text-center w-16' : // S.No - narrow
                                  idx === 1 ? 'text-center w-32' : // GPIO - medium
                                  idx === 2 ? 'text-center w-32' : // PIN - medium
                                  idx === 3 ? 'text-center w-32' : // Segment name - wider
                                  'text-center w-32' // Pin number - widest
                                }`}>
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {subtopic.table.slice(1).map((row: string[], rowIdx: number) => (
                              <tr key={rowIdx} className="hover:bg-gray-50 transition-colors duration-150">
                                {row.map((cell: string, cellIdx: number) => (
                                  <td key={cellIdx} className={`px-6 py-4 text-sm text-gray-900 ${
                                    cellIdx === 0 ? 'text-center font-medium' : // S.No - centered and bold
                                    cellIdx === 1 ? 'text-center font-mono' : // GPIO - monospace
                                    cellIdx === 2 ? 'text-center font-mono' : // PIN - monospace
                                    cellIdx === 3 ? 'text-center font-medium' : // Segment name - bold
                                    'text-center font-mono' // Pin number - monospace
                                  }`}>
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* PDF Viewer above code block when pdfUrl present */}
                  {(subtopic as any).pdfUrl && (
                    <div className="mb-6">
                      <h4 className="font-bold mb-2">Reference PDF:</h4>
                      <PdfViewer url={(subtopic as any).pdfUrl} title={`${subtopic.title} - PDF`} height={700} useGoogleViewer={true} />
                    </div>
                  )}

                  {subtopic.code && (
                    <div className="mb-4">
                      <h4 className="font-bold mb-2">Code Example:</h4>
                      <CodeBlock code={subtopic.code} language="python" />
                    </div>
                  )}
                  {subtopic.extra && <div className="text-sm text-gray-500">{subtopic.extra}</div>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default: show topic details only
  return (
    <div className="py-16">
      <div className="container-custom">
        <button
          className="mb-6 text-indigo-600 hover:underline"
          onClick={() => navigate("/notes")}
        >
          ← Back to Topics
        </button>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-indigo-50 rounded-lg">
              <Icon className="h-8 w-8 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold">{topicData.title}</h1>
          </div>
          <p className="text-gray-600 text-lg">{topicData.description}</p>
          <hr className="my-6" />
          <p className="text-gray-700 text-base">{topicData.content}</p>
        </div>
      </div>
    </div>
  );
}