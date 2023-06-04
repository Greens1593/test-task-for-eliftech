"use client";
import { Provider } from "react-redux";
import Nav from "./components/Nav";
import store from "@/data/store";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div className="main"></div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
