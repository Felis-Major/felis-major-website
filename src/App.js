// Default imports
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';

// Pages
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PressPage from './pages/PressPage';
import ServicesPage from './pages/ServicePage';
import WasternPage from './pages/WasternPage';
import MessageSentPage from './pages/contact-confirmation/message-sent-page';
import MessageErrorPage from './pages/contact-confirmation/message-error-page';
import Links from './pages/Links';

import './localization/i18n';

function App() {
	return (
		<>
			<Routes>
				{/* Define the default route */}
				<Route path='/' element={<ServicesPage />} />

				{/* Define routes for all of the pages */}
				<Route path='/about' element={<AboutPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/press' element={<PressPage />} />
				<Route path='/services' element={<ServicesPage />} />
				<Route path='/wastern' element={<WasternPage />} />
				<Route path='/message-sent' element={<MessageSentPage />} />
				<Route path='/message-error' element={<MessageErrorPage />} />
				<Route path='/links' element={<Links />} />
			</Routes>
		</>
	);
}

export default App;
