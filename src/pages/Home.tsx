import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import VideoCard from "../components/VideoCard";
import { Link } from 'react-router-dom';
import { Brain, Clock, CheckCircle } from 'lucide-react';

export default function Home() {

  const videos = [
    {
      id: "1",
      title: "Complex Numbers - Basics & Applications",
      description: "Introduction to complex numbers, their properties, and applications.",
      videoId: "watch?v=Kv-tft2DBss&list=PLHD6Gx28FlkjaP-gBuKpYoNHzre1Z4lEV",
    },
    {
      id: "2",
      title: "Angle and Its Measurement",
      description: "Learn about degrees, radians, and their conversions.",
      videoId: "watch?v=Q_FRWrfvFcU&list=PLHD6Gx28FlkgbxCFv38cMVpA-2Qi9L_2r",
    },
    {
      id: "3",
      title: "Trigonometry - Complete Guide",
      description: "Covers basic identities, formulas, and problem-solving techniques.",
      videoId: "watch?v=hSsL0IY2QbU&list=PLHD6Gx28Flkhz8aZJeIX7UOknTwldiP9g",
    },
    {
      id: "4",
      title: "Group Theory - Abstract Algebra",
      description: "An introduction to groups, subgroups, and their applications.",
      videoId: "watch?v=JPUrVJfjwXI&list=PLHD6Gx28FlkgN6ug3NwW8YbIL-qUHV5Dw",
    },
    {
      id: "5",
      title: "Statistics - Mean, Median, Mode",
      description: "Understanding statistical measures with real-life examples.",
      videoId: "watch?v=lVI30y2WhaU&list=PLHD6Gx28FlkiYzvaV1JKsfqGvlbcGdoct",
    },
    {
      id: "6",
      title: "Shares and Mutual Funds",
      description: "Basics of investment in shares and mutual funds explained.",
      videoId: "watch?v=17eZtxOCqpE&list=PLHD6Gx28Flkhe5WioOm7exd7gQiuK7vm2",
    },
    {
      id: "7",
      title: "Polynomials - Class 11 & JEE Level",
      description: "Degree, roots, and applications of polynomials.",
      videoId: "watch?v=78wwVQfDQIg&list=PLHD6Gx28FlkhLkoFLMyuekKO0N49X01cQ",
    },
    {
      id: "8",
      title: "Annuity and EMI - Financial Mathematics",
      description: "How annuities and EMIs are calculated with examples.",
      videoId: "watch?v=kVSedVk57PM&list=PLHD6Gx28FlkjRUlheUmTbnQ5NnU2yKszm",
    },
    {
      id: "9",
      title: "Reasoning Questions for Competitive Exams",
      description: "Logical reasoning problems and shortcuts for fast calculations.",
      videoId: "watch?v=41elBcqN_AA&list=PLHD6Gx28FlkgSgnG3h9ewh28vxKowS0By",
    },
    {
      id: "10",
      title: "JEE Complex Numbers Problems",
      description: "Practice JEE-level questions on complex numbers.",
      videoId: "watch?v=ERpSyf0PoPo&list=PLHD6Gx28FlkjrNIJxaJzcPZDLJdlvlnvJ",
    },
    {
      id: "11",
      title: "System of Linear Equations",
      description: "Solving linear equations using matrices and determinants.",
      videoId: "watch?v=yc1EcJGtHZs&list=PLHD6Gx28FlkhVur759TgbJuuNyUVKWV_y",
    },
    {
      id: "12",
      title: "Functions - Types & Transformations",
      description: "Understanding functions, domain, range, and transformations.",
      videoId: "watch?v=esMsyHao5yo&list=PLHD6Gx28FlkhZfSOhP7IlBLNLc4vsG9VI",
    },
    {
      id: "13",
      title: "Linear Programming Problem (LPP)",
      description: "Introduction to LPP and graphical solution methods.",
      videoId: "watch?v=3EZvnolXwSE&list=PLHD6Gx28FlkiTDX3xkW1jz754w3l_l2GN",
    },
    {
      id: "14",
      title: "CSIR NET Problems in Mathematics",
      description: "Solving previous year CSIR NET mathematics problems.",
      videoId: "watch?v=Wqw5LXX4RtA&list=PLHD6Gx28FlkgAlpVvEiR22LsxkG6UlKFk",
    },
    {
      id: "15",
      title: "International Maths Olympiod Problems",
      description: "Solving previous year mathematics problems.",
      videoId: "watch?v=OWLChctQcaM&list=PLHD6Gx28Flkg0469BEvZvGsQdRPb3Vb4h",
    },
  ];
  

  
  return (
    <>
      <Hero />
      
      {/* Quiz Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Test Your Knowledge</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Challenge yourself with our interactive quizzes on various topics. 
              Each quiz contains 10 random questions with a 10-minute time limit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Topics</h3>
              <p className="text-gray-600">Choose from Python, Mathematics, Web Development, AI, and more</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Timed Challenges</h3>
              <p className="text-gray-600">10-minute timer to test your speed and accuracy</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Results</h3>
              <p className="text-gray-600">Get immediate feedback and detailed explanations</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/quiz"
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
            >
              Start Quiz Now
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Videos Section */}
      <section id="latest-videos" className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Latest Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                description={video.description}
                videoId={video.videoId}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}