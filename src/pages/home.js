import * as React from "react"
import Layout from "../components/layout"

  
  const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 640,
  }
  const headingAccentStyles = {
    color: "#f86b46",
  }
  const paragraphStyles = {
    marginBottom: 48,
  }
const HomePage = (props) => {
    return (
        <Layout pageTitle="Home Page">
            <h1 style={headingStyles}>
                Bianca-Marina Codau
              <br />
              <span style={headingAccentStyles}>
                Hello! I'm a CS undergrad studying at KIT in Karlsruhe, Germany.  
              </span>
              <span role="img" aria-label="Hacker cat emoji">
                🐱‍💻
              </span>
            </h1>
            <p style={paragraphStyles}>
                TODO
            </p>
            <div>{props.children}</div>
        </Layout>
    )
}

export default HomePage