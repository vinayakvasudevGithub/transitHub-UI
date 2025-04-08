<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

## 📁 Frontend Folder Structure

.
├── admin/
│ └── panel/
│ └── AdminProfile.jsx

├── api/
│ ├── config/
│ │ ├── apiConfig.js
│ │ ├── axiosInstance.js
│ │ └── globalErrorHandler.js
│ ├── services/
│ │ ├── auth/
│ │ │ └── authApi.js
│ │ ├── transport/
│ │ │ ├── busApi.js
│ │ │ ├── flightApi.js
│ │ │ └── trainApi.js
│ │ └── utilities/
│ │ └── mapApi.js

├── assets/

├── components/
│ └── Loading.jsx

├── features/
│ ├── auth/
│ │ └── Login.jsx
│ ├── book/
│ │ ├── BusBook.jsx
│ │ ├── FlyBook.jsx
│ │ └── RailBook.jsx
│ ├── dashboard/
│ ├── homesearch/
│ │ ├── BusHomeSearch.jsx
│ │ ├── FlightHomeSearch.jsx
│ │ └── TrainHomeSearch.jsx
│ ├── mytrips/
│ │ ├── BusTrip.jsx
│ │ └── FlyTrip.jsx
│ ├── payment/
│ ├── transport/
│ │ ├── bus/
│ │ │ ├── components/
│ │ │ │ ├── BusCard.jsx
│ │ │ │ ├── BusFilter.jsx
│ │ │ │ ├── BusSearch.jsx
│ │ │ │ ├── BusSeat.jsx
│ │ │ │ └── BusSort.jsx
│ │ │ └── pages/
│ │ │ └── BusListingPage.jsx
│ │ ├── flight/
│ │ │ ├── components/
│ │ │ │ ├── FlightCard.jsx
│ │ │ │ ├── FlightFilter.jsx
│ │ │ │ ├── FlightSearch.jsx
│ │ │ │ └── FlightSort.jsx
│ │ │ └── pages/
│ │ │ └── FlightListingPage.jsx
│ │ ├── train/
│ │ ├── components/
│ │ │ ├── TrainCard.jsx
│ │ │ ├── TrainFilter.jsx
│ │ │ ├── TrainSearch.jsx
│ │ │ └── TrainSort.jsx
│ │ └── pages/
│ │ └── TrainListingPage.jsx

│ ├── upload/
│ │ ├── bus/
│ │ │ ├── components/
│ │ │ │ ├── BusInfo.jsx
│ │ │ │ ├── BusRoutes.jsx
│ │ │ │ ├── BusSeatLayout.jsx
│ │ │ │ └── BusSeats.jsx
│ │ │ └── pages/
│ │ │ └── AddBus.jsx
│ │ ├── flight/
│ │ │ ├── components/
│ │ │ │ ├── Arrival.jsx
│ │ │ │ ├── Departure.jsx
│ │ │ │ ├── FareOptions.jsx
│ │ │ │ └── FlighInfo.jsx
│ │ │ └── pages/
│ │ │ └── AddFlight.jsx
│ │ └── train/
│ │ └── pages/
│
│ └── user/

├── pages/
│ ├── Admin.jsx
│ ├── Book.jsx
│ ├── HomePage.jsx
│ ├── Mytrip.jsx
│ ├── Payment.jsx
│ ├── SearchResults.jsx
│ ├── Upload.jsx
│ └── UserAuth.jsx

├── payment/

├── store/
│ ├── slices/
│ │ ├── auth/
│ │ │ └── authSlice.js
│ │ └── userTransport/
│ │ ├── busUserSlice.js
│ │ ├── flightUserSlice.js
│ │ └── trainUserSlice.js
│ └── store.js

├── App.jsx
├── main.jsx
└── README.md
