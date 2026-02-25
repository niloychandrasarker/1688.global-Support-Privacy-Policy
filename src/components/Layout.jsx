const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.12),_transparent_55%),_linear-gradient(180deg,_#f8fafc_0%,_#ffffff_45%,_#f8fafc_100%)]">
      {children}
    </div>
  );
};

export default Layout;
