export default function Footer() {
  return (
    <footer className="bg-orange-50 text-gray-600 py-12 border-t border-orange-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent mb-4">
              Culinari
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              AI zdravi deserti bez šećera i aditiva. 
              Ukusno sreće hranjivo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Brzi Linkovi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#desserts" className="hover:text-orange-500 transition-colors">Deserti</a></li>
              <li><a href="#benefits" className="hover:text-orange-500 transition-colors">Prednosti</a></li>
              <li><a href="#pricing" className="hover:text-orange-500 transition-colors">Cene</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Podrška</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Često Postavljana Pitanja</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Informacije o Dostavi</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Politika Povraćaja</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Uslovi Korišćenja</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Budite U Toku</h4>
            <p className="text-gray-500 text-sm mb-4">
              Prijavite se za specijalne ponude i nove recepte.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Vaš email"
                className="flex-1 px-4 py-2 rounded-lg bg-white border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
              />
              <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all font-medium text-sm">
                Pridruži Se
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Culinari. Sva prava zadržana.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-orange-400 transition-colors">Politika Privatnosti</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Politika Kolačića</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Pristupačnost</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
