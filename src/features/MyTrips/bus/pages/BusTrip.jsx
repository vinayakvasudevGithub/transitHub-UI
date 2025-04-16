import { useContext, useEffect, useState } from "react";
import axios from "axios";
// import { UserContext } from "../../../context/UserContext";
import { UserContext } from "../../../../../context/UserContext";
import Loading from "../../../../components/Loading";
import AuthSetup from "../../components/AuthSetup";
import Error from "../../components/Error";
import DecorativeTicket from "../../components/DecorativeTicket";
import StatusCard from "../../components/StatusCard";
import QuickActions from "../../components/QuickActions";
import TPS from "../../components/TPS";
import TicketList from "./TicketList";
import PrintTicket from "./PrintTicket";
import HeadDesign from "../../components/HeadDesign";

const BusTrip = () => {
  //   const { user, loading: userLoading } = useContext(UserContext);
  const { user, loading: userLoading } = useContext(UserContext);
  const [bookedTickets, setBookedTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showDetailsForTicket, setShowDetailsForTicket] = useState(null);

  useEffect(() => {
    const fetchBookedTickets = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:2001/busticket/user",
          {
            withCredentials: true,
          }
        );
        setBookedTickets(response.data);
      } catch (err) {
        console.error("Failed to fetch tickets:", err);
        setError(
          err.response?.data?.message || "Failed to load booked tickets"
        );
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchBookedTickets();
    }
  }, [user]);

  const handlePrintTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowPrintModal(true);
  };

  const handleCancelTicket = async (ticketId) => {
    if (window.confirm("Are you sure you want to cancel this ticket?")) {
      try {
        // Implement actual cancellation logic here
        alert("Ticket cancellation functionality would be implemented here");
        // After successful cancellation, refresh ticket list
        // fetchBookedTickets();
      } catch (err) {
        console.error("Failed to cancel ticket:", err);
        alert("Failed to cancel ticket. Please try again.");
      }
    }
  };

  const toggleDetails = (ticketId) => {
    if (showDetailsForTicket === ticketId) {
      setShowDetailsForTicket(null);
    } else {
      setShowDetailsForTicket(ticketId);
    }
  };

  // Filter tickets based on active tab
  const filteredTickets = bookedTickets.filter((ticket) => {
    if (activeTab === "upcoming") {
      // Logic to determine if ticket is upcoming
      return true; // Replace with actual logic
    } else if (activeTab === "completed") {
      // Logic to determine if trip is completed
      return false; // Replace with actual logic
    } else if (activeTab === "cancelled") {
      return false; // Replace with actual logic
    }
    return true;
  });

  if (userLoading && loading) {
    return <Loading />;
  }

  if (!user) {
    return <AuthSetup />;
  }

  //   if (loading) {
  //     return <Loading />;
  //   }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}

      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between">
            <HeadDesign user={user} />
            <DecorativeTicket />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatusCard
          filteredTickets={bookedTickets}
          bookedTickets={bookedTickets}
        />

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
          <QuickActions />
        </div>

        <div className="mb-8">
          <TPS setActiveTab={setActiveTab} activeTab={activeTab} />

          <TicketList
            showDetailsForTicket={showDetailsForTicket}
            filteredTickets={filteredTickets}
            activeTab={activeTab}
            handlePrintTicket={handlePrintTicket}
            toggleDetails={toggleDetails}
          />
        </div>
      </div>

      <PrintTicket
        setShowPrintModal={setShowPrintModal}
        showPrintModal={showPrintModal}
        selectedTicket={selectedTicket}
      />
    </div>
  );
};

export default BusTrip;
