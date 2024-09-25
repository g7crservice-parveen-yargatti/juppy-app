import { Row, Col, Button } from "antd";
import { motion } from "framer-motion";

function Techies() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Col
      style={{
        flex: 1,
        overflow: "auto",
        padding: "20px",
        backgroundColor: "#fff",
      }}
    >
      <Col
        style={{
          flex: 1,
          overflow: "auto",
          padding: "20px",
        }}
      >
        <Row>
          <Col
            xs={24}
            sm={24}
            md={12}
            style={{ padding: "20px", textAlign: "left" }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <div
                style={{
                  color: "rgb(0 122 255)",
                  lineHeight: "0.75rem",
                  textTransform: "uppercase",
                  fontWeight: 200,
                }}
              >
                For tech professionals
              </div>
              <br />
              <div
                style={{
                  fontSize: "3.00rem",
                  lineHeight: "2.9rem",
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                We understand your rules, your needs, your code
              </div>
              <br />
              <div
                style={{
                  color: "rgb(107 114 128)",
                  letterSpacing: ".025em",
                  lineHeight: "1.5rem",
                }}
              >
                Keep an eye on job offers that match with you. You decide which
                is your next professional challenge.
              </div>
              <ul
                style={{
                  padding: 0,
                  display: "flex",
                  flexWrap: "wrap",
                  listStyleType: "none",
                }}
              >
                {[
                  "Your profile in 2 minutes",
                  "Offers that match 100%",
                  "You decide who can talk to you",
                  "Get a 100€ Amazon gift card",
                ].map((text, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "50%",
                      padding: "10px 0",
                    }}
                  >
                    <img
                      src={"../../check-mark.png"}
                      alt="check mark"
                      style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "10px",
                      }}
                    />
                    {text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <motion.img
              src={"../../jobs.png"}
              alt="Job offers"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                borderRadius: "10px",
                objectFit: "contain",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Col>
          <Button
            onClick={() => (window.location.href = "https://app.joppy.me/")}
            style={{
              backgroundColor: "#04befe",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Find your next job challenge
          </Button>
        </Row>
      </Col>
    </Col>
  );
}

export default Techies;
