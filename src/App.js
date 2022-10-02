// Default imports
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import main pages
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WasternPage from './pages/WasternPage';
import ContactPage from './pages/ContactPage';

// // Import special pages
// import MessageSentPage from './pages/sort/contact-confirmation/MessageSentPage';
// import MessageErrorPage from './pages/sort/contact-confirmation/MessageErrorPage';
// import LinksPage from './pages/sort/links-page/LinksPage';

// Import localization
import './localization/i18n';

function App() {
	return (
		<>
			<Routes>
				{/* Define the default route */}
				<Route exact path='/' element={<AboutPage />} />

				{/* Main Pages */}
				<Route exact path='/about' element={<AboutPage />} />
				<Route exact path='/services' element={<ServicesPage />} />
				<Route exact path='/wastern' element={<WasternPage />} />
				<Route exact path='/contact' element={<ContactPage />} />

				{/* Special Pages */}
				{/* <Route exact path='/message-sent' element={<MessageSentPage />} />
				<Route exact path='/message-error' element={<MessageErrorPage />} />
				<Route exact path='/links' element={<LinksPage />} /> */}

				{/* 404 */}
				{/* <Route path="*" element={<PageNotFound />} /> */}
			</Routes>
		</>
	);
}

export default App;
