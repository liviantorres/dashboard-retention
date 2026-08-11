import { LogOut, CircleUserRound, TextAlignJustify } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ collapsed, setCollapsed, items, user }) {
  const location = useLocation();

  return (
    <aside
      className={`h-screen sticky top-0 bg-white-900 text-[#515151] flex flex-col justify-between
      transition-all duration-300 border-r font-lexend
      ${collapsed ? "w-20" : "w-64"}`}
    >
      <div>
        <div className="flex items-center justify-between p-8 ">
          {!collapsed && (
            <span className="font-bold">
              <img
                src="/src/assets/logo-ufc.png"
                alt=""
                className="h-10 object-contain"
              />
            </span>
          )}

          <button onClick={() => setCollapsed(!collapsed)}>
            <TextAlignJustify
              className={`cursor-pointer transition-transform hover:text-blue-600 ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* 📌 MENU */}
        <nav className="p-2 space-y-2">
          {items.map((item, index) => {
            const isActive = location.pathname.startsWith(item.link);

            return (
              <Link
                key={index}
                to={item.link}
                className={`flex items-center ${
                  collapsed ? "justify-center" : "justify-start"
                } gap-3 p-2 rounded-lg transition-all duration-200 ease-in-out
                ${
                  isActive
                    ? "bg-blue-600 text-white font-medium"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {item.icon}

                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 🔻 FOOTER */}
      <div className="p-2 border-t border-gray-700 space-y-2">
        <Link
          to="/perfil"
          className="flex items-center gap-3 p-2 hover:bg-blue-50 hover:text-blue-600 rounded"
        >
          <CircleUserRound />
          {!collapsed && <span>{user?.name}</span>}
        </Link>

        <button className="w-full flex items-center gap-3 p-2 hover:bg-red-500/20 text-red-400 cursor-pointer rounded">
          <LogOut />
          {!collapsed && <span>Sair</span>}
        </button>
      </div>
    </aside>
  );
}
