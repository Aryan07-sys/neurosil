import { useEffect, useState } from 'react';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);
  <button
  id="theme-toggle"
  style={{ display: 'none' }}
/>


  return (
    <>
      {children}
      {/* global toggle hook */}
      <button
        id="theme-toggle"
        onClick={() => setDark((d) => !d)}
        style={{ display: 'none' }}
      />
    </>
  );
}
