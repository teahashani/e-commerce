'use client';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';


import { useState, useEffect } from 'react';
import { 
  FiSearch, 
  FiMoon, 
  FiSun, 
  FiBell, 
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiCheckSquare,
  FiFileText,
  FiGrid,
  FiFolder,
  FiUsers,
  FiShoppingBag,
  FiTarget,
  FiTrendingUp,
  FiTrendingDown
} from 'react-icons/fi';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [monthlyTarget, setMonthlyTarget] = useState(85);
  
  // Mock data - in a real app, this would come from an API
  const customerCount = 1250;
  const orderCount = 342;

  // Apply dark mode to the HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const menuItems = [
    { icon: FiHome, label: 'Dashboard', href: '/dashboard' },
    { icon: FiCalendar, label: 'Calendar', href: '/calendar' },
    { icon: FiUser, label: 'User Profile', href: '/profile' },
    { icon: FiCheckSquare, label: 'Tasks', href: '/tasks' },
    { icon: FiFileText, label: 'Forms', href: '/forms' },
    { icon: FiGrid, label: 'Tables', href: '/tables' },
    { icon: FiFolder, label: 'Pages', href: '/pages' },
  ];

  const monthlySalesData = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4500 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 7000 },
    { month: 'Jul', sales: 6500 },
    { month: 'Aug', sales: 7200 },
    { month: 'Sep', sales: 5900 },
    { month: 'Oct', sales: 6300 },
    { month: 'Nov', sales: 5800 },
    { month: 'Dec', sales: 8000 },
  ];
  
  return (
    <div className="flex h-screen">
      {/* Vertical Menu */}
      <div className={`bg-white dark:bg-gray-800 w-64 min-h-screen shadow-lg transition-all duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-4">
          <h2 className="text-2xl font-medium text-gray-800 dark:text-white mb-8">TailAdmin</h2>
          <nav>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg mb-2 transition-colors"
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navbar */}
        <nav className="bg-white dark:bg-gray-800 shadow-md p-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FiMenu className="w-6 h-6 text-gray-600 dark:text-gray-200" />
            </button>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? (
                  <FiSun className="w-6 h-6 text-gray-600 dark:text-gray-200" />
                ) : (
                  <FiMoon className="w-6 h-6 text-gray-600 dark:text-gray-200" />
                )}
              </button>

              {/* Notifications */}
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative">
                <FiBell className="w-6 h-6 text-gray-600 dark:text-gray-200" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile Section */}
              <div className="flex items-center space-x-3">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-gray-700 dark:text-gray-200 font-medium">Tea</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Dashboard Content */}
        <main className="p-6">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Customers Box */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-auto h-auto">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Customers</p>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{customerCount}</h3>
                  <div className="flex items-center mt-2 text-green-500">
                    <FiTrendingUp className="mr-1" />
                    <span className="text-sm">12% increase</span>
                  </div>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <FiUsers className="w-8 h-8 text-blue-500 dark:text-blue-300" />
                </div>
              </div>
            </div>
            
            {/* Orders Box */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-auto h-auto">
                <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Orders</p>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{orderCount}</h3>
                  <div className="flex items-center mt-2 text-green-500">
                    <FiTrendingUp className="mr-1" />
                    <span className="text-sm">8% increase</span>
                  </div>
                </div>
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <FiShoppingBag className="w-8 h-8 text-green-500 dark:text-green-300" />
                </div>
              </div>
            </div>
            
            {/* Monthly Target Box */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-100 h-auto -ml-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Target</p>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{monthlyTarget}%</h3>
                  <div className="flex items-center mt-2 text-red-500">
                    <FiTrendingDown className="mr-1" />
                    <span className="text-sm">5% decrease</span>
                  </div>
                </div>
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                  <FiTarget className="w-8 h-8 text-purple-500 dark:text-purple-300" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Target you've set for each month</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-purple-500 h-2.5 rounded-full" 
                    style={{ width: `${monthlyTarget}%` }}
                  ></div>
                  <div className="mt-6">

                 {/* Chart box */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-12 -ml-200 mr-100">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Monthly Sales</h3>
              <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlySalesData}>
                  <XAxis dataKey="month" stroke="#8884d8" />
                  <YAxis />
                  <Tooltip />
                   <Bar dataKey="sales" fill="#8884d8" barSize={30} radius={[8, 8, 0, 0]} />
                   </BarChart>
                   </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Navbar; 