"use client";
import { Provider } from "react-redux";
import Nav from "./components/Nav";
import store from "@/data/store";
import "./globals.css";

export const metadata = {
  title: "Food Delivery App",
  description: "Test task given by Eliftech",
};

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
