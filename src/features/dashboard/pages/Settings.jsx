const Settings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              General Settings
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="site-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Site Name
                </label>
                <input
                  type="text"
                  id="site-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  defaultValue="Admin Panel"
                />
              </div>
              <div>
                <label
                  htmlFor="timezone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Timezone
                </label>
                <select
                  id="timezone"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                >
                  <option>(UTC-12:00) International Date Line West</option>
                  <option>(UTC-05:00) Eastern Time (US & Canada)</option>
                  <option selected>
                    (UTC+00:00) Coordinated Universal Time
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="email-notifications"
                    name="email-notifications"
                    type="checkbox"
                    className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                    defaultChecked
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="email-notifications"
                    className="font-medium text-gray-700"
                  >
                    Email notifications
                  </label>
                  <p className="text-gray-500">
                    Receive email notifications for important updates
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="push-notifications"
                    name="push-notifications"
                    type="checkbox"
                    className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="push-notifications"
                    className="font-medium text-gray-700"
                  >
                    Push notifications
                  </label>
                  <p className="text-gray-500">
                    Receive push notifications on your device
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
