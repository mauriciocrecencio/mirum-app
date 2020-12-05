import React from "react";

export const urlAPI = "https://api.countrystatecity.in/v1/countries";
export const tokenAPI = "xZESGh_hHsNYNZFAwBD3r8AvXJkI2YLp0nUVO5UqnF9KJ1YECE8du3vFmywIBg8iw7A"
class SelectLocation extends React.Component {
  componentDidMount() {
    const countries = null;
    const headers = new Headers();
  //   headers.append("X-CSCAPI-KEY", "aDRqa0FXQXdERlZ3TDFGbHpHdGV4WXJwZmdUMjNqZndMT2puQWJsQw==");
  //   const requestOptions = {
  //     method: "GET",
  //     headers:headers,
  //     redirect: "follow",
  //   };
  //   fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // }
     headers.append("auth_token", tokenAPI);
    const requestOptions = {
      method: "GET",
      headers,
      redirect: "follow",
    };
    fetch("https://www.universal-tutorial.com/api/countries/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  
  render() {
    return <div>Selection</div>;
  }
}

export default SelectLocation;
