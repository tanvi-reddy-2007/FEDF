export default function App() {

  const styles = {

    page: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff5f7",
      minHeight: "100vh",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },

    navbar: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 50px",
      backgroundColor: "white",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    },

    logo: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#e91e63"
    },

    navLinks: {
      display: "flex",
      gap: "25px",
      listStyle: "none"
    },

    hero: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "60px 80px",
      flexWrap: "wrap",
      gap: "50px",
      maxWidth: "1400px",
      margin: "0 auto"
    },

    heroText: {
      width: "500px",
      textAlign: "center"
    },

    heading: {
      fontSize: "65px",
      marginBottom: "20px",
      lineHeight: "1.1"
    },

    highlight: {
      color: "#e91e63"
    },

    paragraph: {
      fontSize: "20px",
      lineHeight: "1.8"
    },

    buttonContainer: {
      marginTop: "30px"
    },

    button: {
      padding: "12px 25px",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#e91e63",
      color: "white",
      fontSize: "16px",
      marginRight: "15px",
      cursor: "pointer"
    },

    image: {
      width: "550px",
      borderRadius: "20px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
    },

    sectionTitle: {
      textAlign: "center",
      fontSize: "40px",
      marginTop: "50px"
    },

    cards: {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
      padding: "40px"
    },

    card: {
      backgroundColor: "white",
      width: "300px",
      padding: "25px",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      textAlign: "center"
    },

    cardTitle: {
      color: "#e91e63",
      marginBottom: "15px"
    },

    footer: {
      width: "100%",
      backgroundColor: "#222",
      color: "white",
      textAlign: "center",
      padding: "20px",
      marginTop: "50px"
    }
  };

  return (

    <div style={styles.page}>

      {/* Navbar */}
      <nav style={styles.navbar}>

        <div style={styles.logo}>
          EventEase
        </div>

        <ul style={styles.navLinks}>
          <li>Home</li>
          <li>Events</li>
          <li>Banquet Halls</li>
          <li>Bookings</li>
          <li>Contact</li>
        </ul>

      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>

        <div style={styles.heroText}>

          <h1 style={styles.heading}>
            Plan Your <span style={styles.highlight}>Perfect Event</span>
          </h1>

          <p style={styles.paragraph}>
            Book banquet halls, manage events, and organize celebrations easily.
            From weddings to conferences, everything is managed in one smart platform.
          </p>

          <div style={styles.buttonContainer}>
            <button style={styles.button}>Book Now</button>
            <button style={styles.button}>Explore Halls</button>
          </div>

        </div>

        <div>

          <img
            style={styles.image}
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop"
            alt="Banquet Hall"
          />

        </div>

      </section>

      {/* Modules Section */}
      <h2 style={styles.sectionTitle}>
        Our Modules
      </h2>

      <div style={styles.cards}>

        <div style={styles.card}>

          <h2 style={styles.cardTitle}>
            User Management
          </h2>

          <p>
            Handles registration, login, profile management,
            role-based access, and password recovery.
          </p>

        </div>

        <div style={styles.card}>

          <h2 style={styles.cardTitle}>
            Event Management
          </h2>

          <p>
            Helps create, schedule, and manage weddings,
            conferences, parties, and other events.
          </p>

        </div>

        <div style={styles.card}>

          <h2 style={styles.cardTitle}>
            Banquet Hall Management
          </h2>

          <p>
            Manages hall details, pricing, availability,
            facilities, and prevents double bookings.
          </p>

        </div>

      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>
          © 2026 EventEase | Event & Banquet Booking System
        </p>
      </footer>

    </div>
  );
}