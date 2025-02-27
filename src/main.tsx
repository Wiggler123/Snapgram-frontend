import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter basename="/~dajo1903/dt167g/project/dist/public">
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
