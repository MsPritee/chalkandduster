import React from 'react';



function Footer() {
  return (

      <>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Chalk and Duster</h3>
                <p className="text-gray-400">
                  Making mathematics accessible and enjoyable for everyone.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="/notes" className="text-gray-400 hover:text-white">Notes</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.youtube.com/@chalkandduster_kbb" 
                  target="_blank" 
                  rel="noopener noreferrer"  
                  className="text-gray-400 hover:text-white"
                  >YouTube</a>
                  <a href="https://www.youtube.com/@codewithpritee" 
                  target="_blank" 
                  rel="noopener noreferrer"  
                  className="text-gray-400 hover:text-white"
                  >YouTube</a>
                  {/* <a href="https://www.instagram.com/chalkandduster_kbb?igsh=M2FvcG54am5lOGlk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white">Twitter</a> */}
                  <a href="https://www.instagram.com/chalkandduster_kbb?igsh=M2FvcG54am5lOGlk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white">Instagram</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} ChalkandDuster. All rights reserved.</p>
            </div>
          </div>
        </footer>
        
      </>

  );
}

export default Footer;