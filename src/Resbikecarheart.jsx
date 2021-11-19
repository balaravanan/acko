import React, { useState } from "react";
import FadeIn from "react-fade-in";
import { CButton } from "@coreui/react";

function Resbikecarheart() {
  const [car, setcar] = useState(false);
  const [car2, setcar2] = useState(true);
  const [bike, setbike] = useState(false);
  const [bike2, setbike2] = useState(false);
  const [heart, setheart] = useState(false);
  const [heart2, setheart2] = useState(false);
  const [carfield, setcarfield] = useState(true);
  const [bikefield, setbikefield] = useState(false);
  const [heartfield, setheartfield] = useState(false);

  const cars = () => {
    setcar2(true);
    setcar(false);
    setbike(false);
    setbike2(false);
    setheart(false);
    setheart2(false);
    setcarfield(true);
    setbikefield(false);
    setheartfield(false);
  };

  const bikes = () => {
    setcar2(false);
    setcar(false);
    setbike(false);
    setbike2(true);
    setheart(false);
    setheart2(false);
    setcarfield(false);
    setbikefield(true);
    setheartfield(false);
  };

  const hearts = () => {
    setcar2(false);
    setcar(false);
    setbike(false);
    setbike2(false);
    setheart(false);
    setheart2(true);
    setcarfield(false);
    setbikefield(false);
    setheartfield(true);
  };

  return (
    <div>
      <div>
        {car && (
          <div>
            <div className="carico" onClick={cars}>
              <img
                alt="car icon"
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE3IiB2aWV3Qm94PSIwIDAgMzAgMTciIHdpZHRoPSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjM2U0NjUxIj48cGF0aCBkPSJtMjMuMSA5LjczOTc1Yy0xLjY5NjIgMC0zLjA2NzggMS40MDI3NS0zLjA2NzggMy4xMzczNSAwIDEuNzM0NyAxLjM3MTYgMy4xMzc0IDMuMDY3OCAzLjEzNzRzMy4wNjc4LTEuNDAyNyAzLjA2NzgtMy4xMzc0YzAtMS43MzQ2LTEuMzcxNi0zLjEzNzM1LTMuMDY3OC0zLjEzNzM1eiIvPjxwYXRoIGQ9Im02Ljg3MTQ5IDkuNzM5NzVjLTEuNjk2MTggMC0zLjA2Nzc4IDEuNDAyNzUtMy4wNjc3OCAzLjEzNzM1IDAgMS43MzQ3IDEuMzcxNiAzLjEzNzQgMy4wNjc3OCAzLjEzNzRzMy4wNjc3OS0xLjQwMjcgMy4wNjc3OS0zLjEzNzRjMC0xLjczNDYtMS4zNzE2MS0zLjEzNzM1LTMuMDY3NzktMy4xMzczNXoiLz48cGF0aCBkPSJtMjcuODc0MSA2Ljg0OTM5Yy0xLjk1OC0uNjc0NTktMi42Mzg2LS44MTM3OS01LjEzMDUtMS4yMzEzOS0uNDgxNi0uMDg1NjYtLjk0MjMtLjI2NzctMS4yNTY0LS42NDI0N2wtMy45MjYzLTMuODU0NzhjLS41MDI2LS40OTI1NTMtMS4xNTE4LS44MDMwNzctMS44NTMzLS44NzgwMzEtMi44MDYtLjMxMDUyNDMtNS4zMTg5LS4zMjEyMzIxLTguMTk4MTgtLjA0MjgzMS0uOTMxODUuMDk2MzY5LTEuNzc5OTQuNTg4OTI1LTIuMzI0MzkgMS4zNTk4ODJsLTIuMTQ2NCAzLjA1MTdjLS4xMDQ3LjE0OTkxLS4yNTEyOS4yNTY5OS0uNDI5MjguMjk5ODJsLTEuMjk4MzEuMzMxOTRjLS44MDYyMS4yMTQxNS0xLjM1MDY2MjMuOTc0NC0xLjMwODc4MTM3IDEuODA5NmwuMjE5ODc1MzcgNC4xNjUyN2MuMDUyMzUxLjk0MjMuODA2MjA2IDEuNjcwNCAxLjcyNzU4NiAxLjY3MDRoLjY1OTYzYzAtLjAxMDcgMC0uMDEwNyAwLS4wMjE0IDAtMi40MDkyIDEuOTA1NTgtNC4zNTgwMiA0LjI2MTM5LTQuMzU4MDIgMi4zNTU4IDAgNC4yNjEzNiAxLjk0ODgyIDQuMjYxMzYgNC4zNTgwMnYuMDIxNGg3LjcwNjFjMC0uMDEwNyAwLS4wMTA3IDAtLjAyMTQgMC0yLjQwOTIgMS45MDU2LTQuMzU4MDIgNC4yNjE0LTQuMzU4MDJzNC4yNjE0IDEuOTQ4ODIgNC4yNjE0IDQuMzU4MDJ2LjAyMTRoLjU1NDljLjU1NSAwIDEuMDM2Ni0uNDE3NiAxLjEyMDMtLjk3NDRsLjMwMzctMi43MzA0M2MuMTA0Ny0xLjAyNzk0LS41MDI2LTIuMDEzMDUtMS40NjU4LTIuMzM0Mjh6bS0xOC4zNDM5Mi0xLjc5ODktMy42MjI3LS4wNTM1NGMtLjMyNDU4IDAtLjU1NDkzLS4zNDI2NS0uNDI5MjgtLjY1MzE3bC43MzI5MS0xLjg5NTI3Yy4xODg0Ny0uNDgxODUuNjE3NzUtLjgxMzc5IDEuMTIwMzItLjg1NjYyLjY5MTA0LS4wNjQyNCAxLjQzNDQyLS4xMDcwNyAyLjE5ODc1LS4xMjg0OXptOC42MDY1Mi4xMTc3OC03LjAzNi0uMDk2Mzd2LTMuNjUxMzNjMS40NjU5LS4wMTA3MSAyLjkzMTcuMDQyODMgNC4xNzc2LjE3MTMyLjMwMzcuMDMyMTMuNTk2OS4xNzEzMy44MDYzLjQwNjlsMi4zMDM0IDIuNTkxMjdjLjE5ODkuMjI0ODYuMDQxOS41NzgyMS0uMjUxMy41NzgyMXoiLz48L2c+PC9zdmc+"
                decoding="async"
                style={{ marginLeft: "5%" }}
              />
              <div
                className="gDjTig"
                style={{ marginRight: "85%", marginTop: "5%" }}
              >
                car & taxi
              </div>
            </div>
          </div>
        )}

        {bike && (
          <div>
            <div className="bikico" onClick={bikes}>
              <img
                alt="car icon"
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjggMTgiIHdpZHRoPSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjM2U0NjUxIj48cGF0aCBkPSJtNC44MTY2NSA3Ljg3OTA1Yy0yLjYzNTUzIDAtNC44MTY2NSAyLjEzNTY1LTQuODE2NjUgNC44MTY2NXMyLjE4MTEyIDQuODE2NyA0LjgxNjY1IDQuODE2NyA0LjgxNjY1LTIuMTgxMiA0LjgxNjY1LTQuODE2Ny0yLjEzNTY4LTQuODE2NjUtNC44MTY2NS00LjgxNjY1em0wIDcuMzYxMjVjLTEuNDA4NjQgMC0yLjU0NDY0LTEuMTM2LTIuNTQ0NjQtMi41NDQ2czEuMTM2LTIuNTQ0NiAyLjU0NDY0LTIuNTQ0NiAyLjU0NDY1IDEuMTM2IDIuNTQ0NjUgMi41NDQ2LTEuMTM2MDEgMi41NDQ2LTIuNTQ0NjUgMi41NDQ2eiIvPjxwYXRoIGQ9Im0yNS41Mzc0IDguNTYwNjUuMzE4LS41NDUyOGMtLjg2MzMtLjQ5OTg0LTEuODE3Ni0uNzcyNDgtMi44MTcyLS43NzI0OC0uMjcyNyAwLS41OTA4LjA0NTQ0LS44NjM0LjA5MDg4bC0zLjEzNTQtNi4zNjE2MTgtMy42ODA2LS45MDg4MDE5Yy0uMzYzNS0uMTgxNzYwMS0uODE3OS4wNDU0Mzk5LS45NTQzLjQ1NDQwMDktLjEzNjMuNDA4OTYxLjA0NTUuODE3OTE5LjQwOS45OTk2NzlsMi41OTAxIDEuMTgxNDUuNDA4OS43NzI0OGMtNC43MjU3LjMxODA4LTYuNTg4OCAyLjgxNzI4LTguNzY5OSAxLjgxNzYtMS40OTk1Mi0uODE3OTItMy44NjI0MS0xLjE4MTQ0LTUuMzE2NDktMS4zNjMyLS42MzYxNi0uMDkwODgtMS4yMjY4OC40MDg5Ni0xLjIyNjg4IDEuMDkwNTYtLjA0NTQ0LjU5MDcyLjQwODk2IDEuMTM2Ljk5OTY4IDEuMTgxNDQgMS4zNjMyLjEzNjMyIDMuMzE3MTMuNDU0NCA0LjQ1MzEzIDEuMDkwNTcgMCAwIDMuMTgwNzYgMS41NDQ5NiAzLjIyNjI2IDUuODYxNzcgMCAuNDA5LjMxODEuNzI3LjcyNy43MjdoMi45MDgyYy4zMTgxIDAgLjU5MDctLjIyNzIuNjgxNi0uNDk5OC4zNjM1LTEuMjI2OSAxLjQwODYtNC4zNjIyNSAzLjcyNjEtNi45OTc3OGwuODYzMyAxLjY4MTI5Yy0xLjQ5OTUuOTk5NjgtMi40OTkyIDIuNjgwOTktMi40OTkyIDQuNTg5NDloLjYzNjJjMCAyLjYzNTUgMi4xODExIDQuODE2NiA0LjgxNjcgNC44MTY2IDIuNjM1NSAwIDQuODYyLTIuMTM1NyA0Ljg2Mi00Ljc3MTIgMC0xLjc3MjItLjk1NDItMy4zMTcxMy0yLjM2MjgtNC4xMzUwNXptLTIuNDUzOCA2LjY3OTY1Yy0xLjQwODYgMC0yLjU0NDctMS4xMzYtMi41NDQ3LTIuNTQ0NnMxLjEzNjEtMi41NDQ2IDIuNTQ0Ny0yLjU0NDYgMi41NDQ2IDEuMTM2IDIuNTQ0NiAyLjU0NDYtMS4xMzYgMi41NDQ2LTIuNTQ0NiAyLjU0NDZ6Ii8+PHBhdGggZD0ibTIxLjY3NDggNC40MjU2MmMuMDkwOS4yMjcyLjMxODEuNDA4OTYuNTkwOC40MDg5NmwxLjA5MDUuMDQ1NDRjLjM2MzUgMCAuNTkwNy0uMzE4MDguNDk5OS0uNjM2MTZsLS42MzYyLTIuNDUzNzdjLS4wNDU0LS4zNjM1Mi0uNDk5OC0uNTQ1MjgtLjc3MjUtLjMxODA4bC0xLjA5MDUuODYzMzZjLS4yMjcyLjE4MTc2LS4zMTgxLjQ5OTg1LS4yMjcyLjc3MjQ5eiIvPjwvZz48L3N2Zz4="
                decoding="async"
              />
              <div
                className="gDjTig"
                style={{ marginRight: "92%", marginTop: "7.5%" }}
              >
                bike
              </div>
            </div>
          </div>
        )}

        {heart && (
          <div>
            <div className="heartico" onClick={hearts}>
              <img
                alt="health icon"
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTcuMDMxMSAyMC4xNDk4Yy0uMjQ0NC4yNDQ0LS40ODg5LjI0NDQtLjczMzMuMjQ0NHMtLjQ4ODgtLjEyMjItLjczMzMtLjI0NDRsLTMuNjY2My0zLjU0NDJjLS4zNjY3LS4zNjY2LS4zNjY3LTEuMDk5OSAwLTEuNDY2NS4zNjY2LS4zNjY3IDEuMDk5OS0uMzY2NyAxLjQ2NjUgMGwyLjkzMzEgMi44MTA4IDkuNjU0OC05LjA0MzY0Yy0uODU1NS0uODU1NDktMi4wNzc2LTEuNTg4NzYtMy42NjY0LTEuODMzMTgtMy42NjY0LS42MTEwNi01Ljk4ODQgMi44MTA4Ny01Ljk4ODQgMi44MTA4N3MtMi4xOTk4LTMuMjk5NzItNS44NjYyLTIuNjg4NjZjLTQuODg4NDQuNzMzMjctNi40NzcxOSA1LjYyMTcxLTQuNzY2MjIgMTAuMTQzNjEgMS43MTA5NiA0LjY0NCA3LjgyMTUyIDguMTg4MiA5Ljg5OTEyIDkuMjg4MS40ODg5LjI0NDQuOTc3Ny4yNDQ0IDEuNDY2NiAwIDIuMDc3Ni0xLjA5OTkgOC4xODgyLTQuNTIxOSAxMC4wMjE0LTkuNDEwMy44NTU0LTIuMzIyMS44NTU0LTQuNjQ0MSAwLTYuNTk5NXoiIGZpbGw9IiMzZTQ2NTEiLz48L3N2Zz4="
                decoding="async"
              />
              <div
                className="gDjTig"
                style={{ marginRight: "80%", marginTop: "7%" }}
              >
                Health
              </div>
            </div>
          </div>
        )}

        {car2 && (
          <div>
            <div className="hsArAS">
              <img
                alt="car icon"
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE3IiB2aWV3Qm94PSIwIDAgMzAgMTciIHdpZHRoPSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMjMuMSA5LjczOTc1Yy0xLjY5NjIgMC0zLjA2NzggMS40MDI3NS0zLjA2NzggMy4xMzczNSAwIDEuNzM0NyAxLjM3MTYgMy4xMzc0IDMuMDY3OCAzLjEzNzRzMy4wNjc4LTEuNDAyNyAzLjA2NzgtMy4xMzc0YzAtMS43MzQ2LTEuMzcxNi0zLjEzNzM1LTMuMDY3OC0zLjEzNzM1eiIvPjxwYXRoIGQ9Im02Ljg3MTQ5IDkuNzM5NzVjLTEuNjk2MTggMC0zLjA2Nzc4IDEuNDAyNzUtMy4wNjc3OCAzLjEzNzM1IDAgMS43MzQ3IDEuMzcxNiAzLjEzNzQgMy4wNjc3OCAzLjEzNzRzMy4wNjc3OS0xLjQwMjcgMy4wNjc3OS0zLjEzNzRjMC0xLjczNDYtMS4zNzE2MS0zLjEzNzM1LTMuMDY3NzktMy4xMzczNXoiLz48cGF0aCBkPSJtMjcuODc0MSA2Ljg0OTM5Yy0xLjk1OC0uNjc0NTktMi42Mzg2LS44MTM3OS01LjEzMDUtMS4yMzEzOS0uNDgxNi0uMDg1NjYtLjk0MjMtLjI2NzctMS4yNTY0LS42NDI0N2wtMy45MjYzLTMuODU0NzhjLS41MDI2LS40OTI1NTMtMS4xNTE4LS44MDMwNzctMS44NTMzLS44NzgwMzEtMi44MDYtLjMxMDUyNDMtNS4zMTg5LS4zMjEyMzIxLTguMTk4MTgtLjA0MjgzMS0uOTMxODUuMDk2MzY5LTEuNzc5OTQuNTg4OTI1LTIuMzI0MzkgMS4zNTk4ODJsLTIuMTQ2NCAzLjA1MTdjLS4xMDQ3LjE0OTkxLS4yNTEyOS4yNTY5OS0uNDI5MjguMjk5ODJsLTEuMjk4MzEuMzMxOTRjLS44MDYyMS4yMTQxNS0xLjM1MDY2MjMuOTc0NC0xLjMwODc4MTM3IDEuODA5NmwuMjE5ODc1MzcgNC4xNjUyN2MuMDUyMzUxLjk0MjMuODA2MjA2IDEuNjcwNCAxLjcyNzU4NiAxLjY3MDRoLjY1OTYzYzAtLjAxMDcgMC0uMDEwNyAwLS4wMjE0IDAtMi40MDkyIDEuOTA1NTgtNC4zNTgwMiA0LjI2MTM5LTQuMzU4MDIgMi4zNTU4IDAgNC4yNjEzNiAxLjk0ODgyIDQuMjYxMzYgNC4zNTgwMnYuMDIxNGg3LjcwNjFjMC0uMDEwNyAwLS4wMTA3IDAtLjAyMTQgMC0yLjQwOTIgMS45MDU2LTQuMzU4MDIgNC4yNjE0LTQuMzU4MDJzNC4yNjE0IDEuOTQ4ODIgNC4yNjE0IDQuMzU4MDJ2LjAyMTRoLjU1NDljLjU1NSAwIDEuMDM2Ni0uNDE3NiAxLjEyMDMtLjk3NDRsLjMwMzctMi43MzA0M2MuMTA0Ny0xLjAyNzk0LS41MDI2LTIuMDEzMDUtMS40NjU4LTIuMzM0Mjh6bS0xOC4zNDM5Mi0xLjc5ODktMy42MjI3LS4wNTM1NGMtLjMyNDU4IDAtLjU1NDkzLS4zNDI2NS0uNDI5MjgtLjY1MzE3bC43MzI5MS0xLjg5NTI3Yy4xODg0Ny0uNDgxODUuNjE3NzUtLjgxMzc5IDEuMTIwMzItLjg1NjYyLjY5MTA0LS4wNjQyNCAxLjQzNDQyLS4xMDcwNyAyLjE5ODc1LS4xMjg0OXptOC42MDY1Mi4xMTc3OC03LjAzNi0uMDk2Mzd2LTMuNjUxMzNjMS40NjU5LS4wMTA3MSAyLjkzMTcuMDQyODMgNC4xNzc2LjE3MTMyLjMwMzcuMDMyMTMuNTk2OS4xNzEzMy44MDYzLjQwNjlsMi4zMDM0IDIuNTkxMjdjLjE5ODkuMjI0ODYuMDQxOS41NzgyMS0uMjUxMy41NzgyMXoiLz48L2c+PC9zdmc+"
                decoding="async"
              />
            </div>
            <div className="gDjTig-1" style={{ marginRight: "27em" }}>
              car & taxi
            </div>
            <div
              style={{ marginLeft: "48%", marginTop: "-10%" }}
              onClick={bikes}
            >
              <img
                alt="car icon"
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjggMTgiIHdpZHRoPSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjM2U0NjUxIj48cGF0aCBkPSJtNC44MTY2NSA3Ljg3OTA1Yy0yLjYzNTUzIDAtNC44MTY2NSAyLjEzNTY1LTQuODE2NjUgNC44MTY2NXMyLjE4MTEyIDQuODE2NyA0LjgxNjY1IDQuODE2NyA0LjgxNjY1LTIuMTgxMiA0LjgxNjY1LTQuODE2Ny0yLjEzNTY4LTQuODE2NjUtNC44MTY2NS00LjgxNjY1em0wIDcuMzYxMjVjLTEuNDA4NjQgMC0yLjU0NDY0LTEuMTM2LTIuNTQ0NjQtMi41NDQ2czEuMTM2LTIuNTQ0NiAyLjU0NDY0LTIuNTQ0NiAyLjU0NDY1IDEuMTM2IDIuNTQ0NjUgMi41NDQ2LTEuMTM2MDEgMi41NDQ2LTIuNTQ0NjUgMi41NDQ2eiIvPjxwYXRoIGQ9Im0yNS41Mzc0IDguNTYwNjUuMzE4LS41NDUyOGMtLjg2MzMtLjQ5OTg0LTEuODE3Ni0uNzcyNDgtMi44MTcyLS43NzI0OC0uMjcyNyAwLS41OTA4LjA0NTQ0LS44NjM0LjA5MDg4bC0zLjEzNTQtNi4zNjE2MTgtMy42ODA2LS45MDg4MDE5Yy0uMzYzNS0uMTgxNzYwMS0uODE3OS4wNDU0Mzk5LS45NTQzLjQ1NDQwMDktLjEzNjMuNDA4OTYxLjA0NTUuODE3OTE5LjQwOS45OTk2NzlsMi41OTAxIDEuMTgxNDUuNDA4OS43NzI0OGMtNC43MjU3LjMxODA4LTYuNTg4OCAyLjgxNzI4LTguNzY5OSAxLjgxNzYtMS40OTk1Mi0uODE3OTItMy44NjI0MS0xLjE4MTQ0LTUuMzE2NDktMS4zNjMyLS42MzYxNi0uMDkwODgtMS4yMjY4OC40MDg5Ni0xLjIyNjg4IDEuMDkwNTYtLjA0NTQ0LjU5MDcyLjQwODk2IDEuMTM2Ljk5OTY4IDEuMTgxNDQgMS4zNjMyLjEzNjMyIDMuMzE3MTMuNDU0NCA0LjQ1MzEzIDEuMDkwNTcgMCAwIDMuMTgwNzYgMS41NDQ5NiAzLjIyNjI2IDUuODYxNzcgMCAuNDA5LjMxODEuNzI3LjcyNy43MjdoMi45MDgyYy4zMTgxIDAgLjU5MDctLjIyNzIuNjgxNi0uNDk5OC4zNjM1LTEuMjI2OSAxLjQwODYtNC4zNjIyNSAzLjcyNjEtNi45OTc3OGwuODYzMyAxLjY4MTI5Yy0xLjQ5OTUuOTk5NjgtMi40OTkyIDIuNjgwOTktMi40OTkyIDQuNTg5NDloLjYzNjJjMCAyLjYzNTUgMi4xODExIDQuODE2NiA0LjgxNjcgNC44MTY2IDIuNjM1NSAwIDQuODYyLTIuMTM1NyA0Ljg2Mi00Ljc3MTIgMC0xLjc3MjItLjk1NDItMy4zMTcxMy0yLjM2MjgtNC4xMzUwNXptLTIuNDUzOCA2LjY3OTY1Yy0xLjQwODYgMC0yLjU0NDctMS4xMzYtMi41NDQ3LTIuNTQ0NnMxLjEzNjEtMi41NDQ2IDIuNTQ0Ny0yLjU0NDYgMi41NDQ2IDEuMTM2IDIuNTQ0NiAyLjU0NDYtMS4xMzYgMi41NDQ2LTIuNTQ0NiAyLjU0NDZ6Ii8+PHBhdGggZD0ibTIxLjY3NDggNC40MjU2MmMuMDkwOS4yMjcyLjMxODEuNDA4OTYuNTkwOC40MDg5NmwxLjA5MDUuMDQ1NDRjLjM2MzUgMCAuNTkwNy0uMzE4MDguNDk5OS0uNjM2MTZsLS42MzYyLTIuNDUzNzdjLS4wNDU0LS4zNjM1Mi0uNDk5OC0uNTQ1MjgtLjc3MjUtLjMxODA4bC0xLjA5MDUuODYzMzZjLS4yMjcyLjE4MTc2LS4zMTgxLjQ5OTg1LS4yMjcyLjc3MjQ5eiIvPjwvZz48L3N2Zz4="
                decoding="async"
              />
              <div
                className="gDjTig"
                style={{ marginRight: "92%", marginTop: "5.5%" }}
              >
                bike
              </div>
            </div>
            <div
              style={{ marginLeft: "80%", marginTop: "-12%" }}
              onClick={hearts}
            >
              <img
                alt="health icon"
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTcuMDMxMSAyMC4xNDk4Yy0uMjQ0NC4yNDQ0LS40ODg5LjI0NDQtLjczMzMuMjQ0NHMtLjQ4ODgtLjEyMjItLjczMzMtLjI0NDRsLTMuNjY2My0zLjU0NDJjLS4zNjY3LS4zNjY2LS4zNjY3LTEuMDk5OSAwLTEuNDY2NS4zNjY2LS4zNjY3IDEuMDk5OS0uMzY2NyAxLjQ2NjUgMGwyLjkzMzEgMi44MTA4IDkuNjU0OC05LjA0MzY0Yy0uODU1NS0uODU1NDktMi4wNzc2LTEuNTg4NzYtMy42NjY0LTEuODMzMTgtMy42NjY0LS42MTEwNi01Ljk4ODQgMi44MTA4Ny01Ljk4ODQgMi44MTA4N3MtMi4xOTk4LTMuMjk5NzItNS44NjYyLTIuNjg4NjZjLTQuODg4NDQuNzMzMjctNi40NzcxOSA1LjYyMTcxLTQuNzY2MjIgMTAuMTQzNjEgMS43MTA5NiA0LjY0NCA3LjgyMTUyIDguMTg4MiA5Ljg5OTEyIDkuMjg4MS40ODg5LjI0NDQuOTc3Ny4yNDQ0IDEuNDY2NiAwIDIuMDc3Ni0xLjA5OTkgOC4xODgyLTQuNTIxOSAxMC4wMjE0LTkuNDEwMy44NTU0LTIuMzIyMS44NTU0LTQuNjQ0MSAwLTYuNTk5NXoiIGZpbGw9IiMzZTQ2NTEiLz48L3N2Zz4="
                decoding="async"
              />
              <div
                className="gDjTig"
                style={{ marginRight: "75%", marginTop: "7%" }}
              >
                Health
              </div>
            </div>
            <div className="hjir" style={{ marginLeft: "5em" }}></div>
          </div>
        )}

        {bike2 && (
          <div>
            <div className="carico" onClick={cars}>
              <img
                alt="car icon"
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE3IiB2aWV3Qm94PSIwIDAgMzAgMTciIHdpZHRoPSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjM2U0NjUxIj48cGF0aCBkPSJtMjMuMSA5LjczOTc1Yy0xLjY5NjIgMC0zLjA2NzggMS40MDI3NS0zLjA2NzggMy4xMzczNSAwIDEuNzM0NyAxLjM3MTYgMy4xMzc0IDMuMDY3OCAzLjEzNzRzMy4wNjc4LTEuNDAyNyAzLjA2NzgtMy4xMzc0YzAtMS43MzQ2LTEuMzcxNi0zLjEzNzM1LTMuMDY3OC0zLjEzNzM1eiIvPjxwYXRoIGQ9Im02Ljg3MTQ5IDkuNzM5NzVjLTEuNjk2MTggMC0zLjA2Nzc4IDEuNDAyNzUtMy4wNjc3OCAzLjEzNzM1IDAgMS43MzQ3IDEuMzcxNiAzLjEzNzQgMy4wNjc3OCAzLjEzNzRzMy4wNjc3OS0xLjQwMjcgMy4wNjc3OS0zLjEzNzRjMC0xLjczNDYtMS4zNzE2MS0zLjEzNzM1LTMuMDY3NzktMy4xMzczNXoiLz48cGF0aCBkPSJtMjcuODc0MSA2Ljg0OTM5Yy0xLjk1OC0uNjc0NTktMi42Mzg2LS44MTM3OS01LjEzMDUtMS4yMzEzOS0uNDgxNi0uMDg1NjYtLjk0MjMtLjI2NzctMS4yNTY0LS42NDI0N2wtMy45MjYzLTMuODU0NzhjLS41MDI2LS40OTI1NTMtMS4xNTE4LS44MDMwNzctMS44NTMzLS44NzgwMzEtMi44MDYtLjMxMDUyNDMtNS4zMTg5LS4zMjEyMzIxLTguMTk4MTgtLjA0MjgzMS0uOTMxODUuMDk2MzY5LTEuNzc5OTQuNTg4OTI1LTIuMzI0MzkgMS4zNTk4ODJsLTIuMTQ2NCAzLjA1MTdjLS4xMDQ3LjE0OTkxLS4yNTEyOS4yNTY5OS0uNDI5MjguMjk5ODJsLTEuMjk4MzEuMzMxOTRjLS44MDYyMS4yMTQxNS0xLjM1MDY2MjMuOTc0NC0xLjMwODc4MTM3IDEuODA5NmwuMjE5ODc1MzcgNC4xNjUyN2MuMDUyMzUxLjk0MjMuODA2MjA2IDEuNjcwNCAxLjcyNzU4NiAxLjY3MDRoLjY1OTYzYzAtLjAxMDcgMC0uMDEwNyAwLS4wMjE0IDAtMi40MDkyIDEuOTA1NTgtNC4zNTgwMiA0LjI2MTM5LTQuMzU4MDIgMi4zNTU4IDAgNC4yNjEzNiAxLjk0ODgyIDQuMjYxMzYgNC4zNTgwMnYuMDIxNGg3LjcwNjFjMC0uMDEwNyAwLS4wMTA3IDAtLjAyMTQgMC0yLjQwOTIgMS45MDU2LTQuMzU4MDIgNC4yNjE0LTQuMzU4MDJzNC4yNjE0IDEuOTQ4ODIgNC4yNjE0IDQuMzU4MDJ2LjAyMTRoLjU1NDljLjU1NSAwIDEuMDM2Ni0uNDE3NiAxLjEyMDMtLjk3NDRsLjMwMzctMi43MzA0M2MuMTA0Ny0xLjAyNzk0LS41MDI2LTIuMDEzMDUtMS40NjU4LTIuMzM0Mjh6bS0xOC4zNDM5Mi0xLjc5ODktMy42MjI3LS4wNTM1NGMtLjMyNDU4IDAtLjU1NDkzLS4zNDI2NS0uNDI5MjgtLjY1MzE3bC43MzI5MS0xLjg5NTI3Yy4xODg0Ny0uNDgxODUuNjE3NzUtLjgxMzc5IDEuMTIwMzItLjg1NjYyLjY5MTA0LS4wNjQyNCAxLjQzNDQyLS4xMDcwNyAyLjE5ODc1LS4xMjg0OXptOC42MDY1Mi4xMTc3OC03LjAzNi0uMDk2Mzd2LTMuNjUxMzNjMS40NjU5LS4wMTA3MSAyLjkzMTcuMDQyODMgNC4xNzc2LjE3MTMyLjMwMzcuMDMyMTMuNTk2OS4xNzEzMy44MDYzLjQwNjlsMi4zMDM0IDIuNTkxMjdjLjE5ODkuMjI0ODYuMDQxOS41NzgyMS0uMjUxMy41NzgyMXoiLz48L2c+PC9zdmc+"
                decoding="async"
                style={{ marginLeft: "5%" }}
              />
              <div
                className="gDjTig"
                style={{ marginRight: "85%", marginTop: "5%" }}
              >
                car & taxi
              </div>
            </div>
            <div
              className="hsArAS"
              style={{ marginTop: "-5.7em", marginLeft: "19em" }}
            >
              <img
                alt="car icon"
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjggMTgiIHdpZHRoPSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtNC44MTY2NSA3Ljg3OTA1Yy0yLjYzNTUzIDAtNC44MTY2NSAyLjEzNTY1LTQuODE2NjUgNC44MTY2NXMyLjE4MTEyIDQuODE2NyA0LjgxNjY1IDQuODE2NyA0LjgxNjY1LTIuMTgxMiA0LjgxNjY1LTQuODE2Ny0yLjEzNTY4LTQuODE2NjUtNC44MTY2NS00LjgxNjY1em0wIDcuMzYxMjVjLTEuNDA4NjQgMC0yLjU0NDY0LTEuMTM2LTIuNTQ0NjQtMi41NDQ2czEuMTM2LTIuNTQ0NiAyLjU0NDY0LTIuNTQ0NiAyLjU0NDY1IDEuMTM2IDIuNTQ0NjUgMi41NDQ2LTEuMTM2MDEgMi41NDQ2LTIuNTQ0NjUgMi41NDQ2eiIvPjxwYXRoIGQ9Im0yNS41Mzc0IDguNTYwNjUuMzE4LS41NDUyOGMtLjg2MzMtLjQ5OTg0LTEuODE3Ni0uNzcyNDgtMi44MTcyLS43NzI0OC0uMjcyNyAwLS41OTA4LjA0NTQ0LS44NjM0LjA5MDg4bC0zLjEzNTQtNi4zNjE2MTgtMy42ODA2LS45MDg4MDE5Yy0uMzYzNS0uMTgxNzYwMS0uODE3OS4wNDU0Mzk5LS45NTQzLjQ1NDQwMDktLjEzNjMuNDA4OTYxLjA0NTUuODE3OTE5LjQwOS45OTk2NzlsMi41OTAxIDEuMTgxNDUuNDA4OS43NzI0OGMtNC43MjU3LjMxODA4LTYuNTg4OCAyLjgxNzI4LTguNzY5OSAxLjgxNzYtMS40OTk1Mi0uODE3OTItMy44NjI0MS0xLjE4MTQ0LTUuMzE2NDktMS4zNjMyLS42MzYxNi0uMDkwODgtMS4yMjY4OC40MDg5Ni0xLjIyNjg4IDEuMDkwNTYtLjA0NTQ0LjU5MDcyLjQwODk2IDEuMTM2Ljk5OTY4IDEuMTgxNDQgMS4zNjMyLjEzNjMyIDMuMzE3MTMuNDU0NCA0LjQ1MzEzIDEuMDkwNTcgMCAwIDMuMTgwNzYgMS41NDQ5NiAzLjIyNjI2IDUuODYxNzcgMCAuNDA5LjMxODEuNzI3LjcyNy43MjdoMi45MDgyYy4zMTgxIDAgLjU5MDctLjIyNzIuNjgxNi0uNDk5OC4zNjM1LTEuMjI2OSAxLjQwODYtNC4zNjIyNSAzLjcyNjEtNi45OTc3OGwuODYzMyAxLjY4MTI5Yy0xLjQ5OTUuOTk5NjgtMi40OTkyIDIuNjgwOTktMi40OTkyIDQuNTg5NDloLjYzNjJjMCAyLjYzNTUgMi4xODExIDQuODE2NiA0LjgxNjcgNC44MTY2IDIuNjM1NSAwIDQuODYyLTIuMTM1NyA0Ljg2Mi00Ljc3MTIgMC0xLjc3MjItLjk1NDItMy4zMTcxMy0yLjM2MjgtNC4xMzUwNXptLTIuNDUzOCA2LjY3OTY1Yy0xLjQwODYgMC0yLjU0NDctMS4xMzYtMi41NDQ3LTIuNTQ0NnMxLjEzNjEtMi41NDQ2IDIuNTQ0Ny0yLjU0NDYgMi41NDQ2IDEuMTM2IDIuNTQ0NiAyLjU0NDYtMS4xMzYgMi41NDQ2LTIuNTQ0NiAyLjU0NDZ6Ii8+PHBhdGggZD0ibTIxLjY3NDggNC40MjU2MmMuMDkwOS4yMjcyLjMxODEuNDA4OTYuNTkwOC40MDg5NmwxLjA5MDUuMDQ1NDRjLjM2MzUgMCAuNTkwNy0uMzE4MDguNDk5OS0uNjM2MTZsLS42MzYyLTIuNDUzNzdjLS4wNDU0LS4zNjM1Mi0uNDk5OC0uNTQ1MjgtLjc3MjUtLjMxODA4bC0xLjA5MDUuODYzMzZjLS4yMjcyLjE4MTc2LS4zMTgxLjQ5OTg1LS4yMjcyLjc3MjQ5eiIvPjwvZz48L3N2Zz4="
                decoding="async"
              />
            </div>
            <div
              className="gDjTig-1"
              style={{ marginLeft: "1.5em", marginTop: "1.5%" }}
            >
              bike
            </div>
            <div
              style={{ marginLeft: "80%", marginTop: "-12%" }}
              onClick={hearts}
            >
              <img
                alt="health icon"
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTcuMDMxMSAyMC4xNDk4Yy0uMjQ0NC4yNDQ0LS40ODg5LjI0NDQtLjczMzMuMjQ0NHMtLjQ4ODgtLjEyMjItLjczMzMtLjI0NDRsLTMuNjY2My0zLjU0NDJjLS4zNjY3LS4zNjY2LS4zNjY3LTEuMDk5OSAwLTEuNDY2NS4zNjY2LS4zNjY3IDEuMDk5OS0uMzY2NyAxLjQ2NjUgMGwyLjkzMzEgMi44MTA4IDkuNjU0OC05LjA0MzY0Yy0uODU1NS0uODU1NDktMi4wNzc2LTEuNTg4NzYtMy42NjY0LTEuODMzMTgtMy42NjY0LS42MTEwNi01Ljk4ODQgMi44MTA4Ny01Ljk4ODQgMi44MTA4N3MtMi4xOTk4LTMuMjk5NzItNS44NjYyLTIuNjg4NjZjLTQuODg4NDQuNzMzMjctNi40NzcxOSA1LjYyMTcxLTQuNzY2MjIgMTAuMTQzNjEgMS43MTA5NiA0LjY0NCA3LjgyMTUyIDguMTg4MiA5Ljg5OTEyIDkuMjg4MS40ODg5LjI0NDQuOTc3Ny4yNDQ0IDEuNDY2NiAwIDIuMDc3Ni0xLjA5OTkgOC4xODgyLTQuNTIxOSAxMC4wMjE0LTkuNDEwMy44NTU0LTIuMzIyMS44NTU0LTQuNjQ0MSAwLTYuNTk5NXoiIGZpbGw9IiMzZTQ2NTEiLz48L3N2Zz4="
                decoding="async"
              />
              <div
                className="gDjTig"
                style={{ marginRight: "75%", marginTop: "7%" }}
              >
                Health
              </div>
            </div>
            <div className="hjir" style={{ marginLeft: "17.5em" }}></div>
          </div>
        )}

        {heart2 && (
          <div>
            <div className="carico" onClick={cars}>
              <img
                alt="car icon"
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE3IiB2aWV3Qm94PSIwIDAgMzAgMTciIHdpZHRoPSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjM2U0NjUxIj48cGF0aCBkPSJtMjMuMSA5LjczOTc1Yy0xLjY5NjIgMC0zLjA2NzggMS40MDI3NS0zLjA2NzggMy4xMzczNSAwIDEuNzM0NyAxLjM3MTYgMy4xMzc0IDMuMDY3OCAzLjEzNzRzMy4wNjc4LTEuNDAyNyAzLjA2NzgtMy4xMzc0YzAtMS43MzQ2LTEuMzcxNi0zLjEzNzM1LTMuMDY3OC0zLjEzNzM1eiIvPjxwYXRoIGQ9Im02Ljg3MTQ5IDkuNzM5NzVjLTEuNjk2MTggMC0zLjA2Nzc4IDEuNDAyNzUtMy4wNjc3OCAzLjEzNzM1IDAgMS43MzQ3IDEuMzcxNiAzLjEzNzQgMy4wNjc3OCAzLjEzNzRzMy4wNjc3OS0xLjQwMjcgMy4wNjc3OS0zLjEzNzRjMC0xLjczNDYtMS4zNzE2MS0zLjEzNzM1LTMuMDY3NzktMy4xMzczNXoiLz48cGF0aCBkPSJtMjcuODc0MSA2Ljg0OTM5Yy0xLjk1OC0uNjc0NTktMi42Mzg2LS44MTM3OS01LjEzMDUtMS4yMzEzOS0uNDgxNi0uMDg1NjYtLjk0MjMtLjI2NzctMS4yNTY0LS42NDI0N2wtMy45MjYzLTMuODU0NzhjLS41MDI2LS40OTI1NTMtMS4xNTE4LS44MDMwNzctMS44NTMzLS44NzgwMzEtMi44MDYtLjMxMDUyNDMtNS4zMTg5LS4zMjEyMzIxLTguMTk4MTgtLjA0MjgzMS0uOTMxODUuMDk2MzY5LTEuNzc5OTQuNTg4OTI1LTIuMzI0MzkgMS4zNTk4ODJsLTIuMTQ2NCAzLjA1MTdjLS4xMDQ3LjE0OTkxLS4yNTEyOS4yNTY5OS0uNDI5MjguMjk5ODJsLTEuMjk4MzEuMzMxOTRjLS44MDYyMS4yMTQxNS0xLjM1MDY2MjMuOTc0NC0xLjMwODc4MTM3IDEuODA5NmwuMjE5ODc1MzcgNC4xNjUyN2MuMDUyMzUxLjk0MjMuODA2MjA2IDEuNjcwNCAxLjcyNzU4NiAxLjY3MDRoLjY1OTYzYzAtLjAxMDcgMC0uMDEwNyAwLS4wMjE0IDAtMi40MDkyIDEuOTA1NTgtNC4zNTgwMiA0LjI2MTM5LTQuMzU4MDIgMi4zNTU4IDAgNC4yNjEzNiAxLjk0ODgyIDQuMjYxMzYgNC4zNTgwMnYuMDIxNGg3LjcwNjFjMC0uMDEwNyAwLS4wMTA3IDAtLjAyMTQgMC0yLjQwOTIgMS45MDU2LTQuMzU4MDIgNC4yNjE0LTQuMzU4MDJzNC4yNjE0IDEuOTQ4ODIgNC4yNjE0IDQuMzU4MDJ2LjAyMTRoLjU1NDljLjU1NSAwIDEuMDM2Ni0uNDE3NiAxLjEyMDMtLjk3NDRsLjMwMzctMi43MzA0M2MuMTA0Ny0xLjAyNzk0LS41MDI2LTIuMDEzMDUtMS40NjU4LTIuMzM0Mjh6bS0xOC4zNDM5Mi0xLjc5ODktMy42MjI3LS4wNTM1NGMtLjMyNDU4IDAtLjU1NDkzLS4zNDI2NS0uNDI5MjgtLjY1MzE3bC43MzI5MS0xLjg5NTI3Yy4xODg0Ny0uNDgxODUuNjE3NzUtLjgxMzc5IDEuMTIwMzItLjg1NjYyLjY5MTA0LS4wNjQyNCAxLjQzNDQyLS4xMDcwNyAyLjE5ODc1LS4xMjg0OXptOC42MDY1Mi4xMTc3OC03LjAzNi0uMDk2Mzd2LTMuNjUxMzNjMS40NjU5LS4wMTA3MSAyLjkzMTcuMDQyODMgNC4xNzc2LjE3MTMyLjMwMzcuMDMyMTMuNTk2OS4xNzEzMy44MDYzLjQwNjlsMi4zMDM0IDIuNTkxMjdjLjE5ODkuMjI0ODYuMDQxOS41NzgyMS0uMjUxMy41NzgyMXoiLz48L2c+PC9zdmc+"
                decoding="async"
                style={{ marginLeft: "5%" }}
              />
              <div
                className="gDjTig"
                style={{ marginRight: "85%", marginTop: "5%" }}
              >
                car & taxi
              </div>
            </div>
            <div
              style={{ marginLeft: "48%", marginTop: "-10%" }}
              onClick={bikes}
            >
              <img
                alt="car icon"
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjggMTgiIHdpZHRoPSIyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjM2U0NjUxIj48cGF0aCBkPSJtNC44MTY2NSA3Ljg3OTA1Yy0yLjYzNTUzIDAtNC44MTY2NSAyLjEzNTY1LTQuODE2NjUgNC44MTY2NXMyLjE4MTEyIDQuODE2NyA0LjgxNjY1IDQuODE2NyA0LjgxNjY1LTIuMTgxMiA0LjgxNjY1LTQuODE2Ny0yLjEzNTY4LTQuODE2NjUtNC44MTY2NS00LjgxNjY1em0wIDcuMzYxMjVjLTEuNDA4NjQgMC0yLjU0NDY0LTEuMTM2LTIuNTQ0NjQtMi41NDQ2czEuMTM2LTIuNTQ0NiAyLjU0NDY0LTIuNTQ0NiAyLjU0NDY1IDEuMTM2IDIuNTQ0NjUgMi41NDQ2LTEuMTM2MDEgMi41NDQ2LTIuNTQ0NjUgMi41NDQ2eiIvPjxwYXRoIGQ9Im0yNS41Mzc0IDguNTYwNjUuMzE4LS41NDUyOGMtLjg2MzMtLjQ5OTg0LTEuODE3Ni0uNzcyNDgtMi44MTcyLS43NzI0OC0uMjcyNyAwLS41OTA4LjA0NTQ0LS44NjM0LjA5MDg4bC0zLjEzNTQtNi4zNjE2MTgtMy42ODA2LS45MDg4MDE5Yy0uMzYzNS0uMTgxNzYwMS0uODE3OS4wNDU0Mzk5LS45NTQzLjQ1NDQwMDktLjEzNjMuNDA4OTYxLjA0NTUuODE3OTE5LjQwOS45OTk2NzlsMi41OTAxIDEuMTgxNDUuNDA4OS43NzI0OGMtNC43MjU3LjMxODA4LTYuNTg4OCAyLjgxNzI4LTguNzY5OSAxLjgxNzYtMS40OTk1Mi0uODE3OTItMy44NjI0MS0xLjE4MTQ0LTUuMzE2NDktMS4zNjMyLS42MzYxNi0uMDkwODgtMS4yMjY4OC40MDg5Ni0xLjIyNjg4IDEuMDkwNTYtLjA0NTQ0LjU5MDcyLjQwODk2IDEuMTM2Ljk5OTY4IDEuMTgxNDQgMS4zNjMyLjEzNjMyIDMuMzE3MTMuNDU0NCA0LjQ1MzEzIDEuMDkwNTcgMCAwIDMuMTgwNzYgMS41NDQ5NiAzLjIyNjI2IDUuODYxNzcgMCAuNDA5LjMxODEuNzI3LjcyNy43MjdoMi45MDgyYy4zMTgxIDAgLjU5MDctLjIyNzIuNjgxNi0uNDk5OC4zNjM1LTEuMjI2OSAxLjQwODYtNC4zNjIyNSAzLjcyNjEtNi45OTc3OGwuODYzMyAxLjY4MTI5Yy0xLjQ5OTUuOTk5NjgtMi40OTkyIDIuNjgwOTktMi40OTkyIDQuNTg5NDloLjYzNjJjMCAyLjYzNTUgMi4xODExIDQuODE2NiA0LjgxNjcgNC44MTY2IDIuNjM1NSAwIDQuODYyLTIuMTM1NyA0Ljg2Mi00Ljc3MTIgMC0xLjc3MjItLjk1NDItMy4zMTcxMy0yLjM2MjgtNC4xMzUwNXptLTIuNDUzOCA2LjY3OTY1Yy0xLjQwODYgMC0yLjU0NDctMS4xMzYtMi41NDQ3LTIuNTQ0NnMxLjEzNjEtMi41NDQ2IDIuNTQ0Ny0yLjU0NDYgMi41NDQ2IDEuMTM2IDIuNTQ0NiAyLjU0NDYtMS4xMzYgMi41NDQ2LTIuNTQ0NiAyLjU0NDZ6Ii8+PHBhdGggZD0ibTIxLjY3NDggNC40MjU2MmMuMDkwOS4yMjcyLjMxODEuNDA4OTYuNTkwOC40MDg5NmwxLjA5MDUuMDQ1NDRjLjM2MzUgMCAuNTkwNy0uMzE4MDguNDk5OS0uNjM2MTZsLS42MzYyLTIuNDUzNzdjLS4wNDU0LS4zNjM1Mi0uNDk5OC0uNTQ1MjgtLjc3MjUtLjMxODA4bC0xLjA5MDUuODYzMzZjLS4yMjcyLjE4MTc2LS4zMTgxLjQ5OTg1LS4yMjcyLjc3MjQ5eiIvPjwvZz48L3N2Zz4="
                decoding="async"
              />
              <div
                className="gDjTig"
                style={{ marginRight: "92%", marginTop: "5.5%" }}
              >
                bike
              </div>
            </div>
            <div
              className="hsArAS"
              style={{ marginTop: "-5.7em", marginLeft: "30em" }}
            >
              <img
                alt="health icon"
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTcuMDMxMSAyMC4xNDk4Yy0uMjQ0NC4yNDQ0LS40ODg5LjI0NDQtLjczMzMuMjQ0NHMtLjQ4ODgtLjEyMjItLjczMzMtLjI0NDRsLTMuNjY2My0zLjU0NDJjLS4zNjY3LS4zNjY2LS4zNjY3LTEuMDk5OSAwLTEuNDY2NS4zNjY2LS4zNjY3IDEuMDk5OS0uMzY2NyAxLjQ2NjUgMGwyLjkzMzEgMi44MTA4IDkuNjU0OC05LjA0MzY0Yy0uODU1NS0uODU1NDktMi4wNzc2LTEuNTg4NzYtMy42NjY0LTEuODMzMTgtMy42NjY0LS42MTEwNi01Ljk4ODQgMi44MTA4Ny01Ljk4ODQgMi44MTA4N3MtMi4xOTk4LTMuMjk5NzItNS44NjYyLTIuNjg4NjZjLTQuODg4NDQuNzMzMjctNi40NzcxOSA1LjYyMTcxLTQuNzY2MjIgMTAuMTQzNjEgMS43MTA5NiA0LjY0NCA3LjgyMTUyIDguMTg4MiA5Ljg5OTEyIDkuMjg4MS40ODg5LjI0NDQuOTc3Ny4yNDQ0IDEuNDY2NiAwIDIuMDc3Ni0xLjA5OTkgOC4xODgyLTQuNTIxOSAxMC4wMjE0LTkuNDEwMy44NTU0LTIuMzIyMS44NTU0LTQuNjQ0MSAwLTYuNTk5NXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
                decoding="async"
              />
              <div
                className="gDjTig-1"
                style={{ marginLeft: "-2em", marginTop: "7.5em" }}
              >
                Health
              </div>
            </div>
            <div
              className="hjir"
              style={{ marginLeft: "28.5em", marginTop: "3em" }}
            ></div>
          </div>
        )}

        <div className="cartaxii1"></div>

        {carfield && (
          <div>
            <FadeIn>
              <div
                className="inpot-form"
                style={{ marginLeft: "4em", border: "1px solid" }}
              >
                <div class="bg dark">
                  <div class="input-cont dark">
                    <input
                      type="text"
                      name="name"
                      autocomplete="off"
                      required
                    />
                    <label for="name" class="label-name">
                      <span class="content-name">Enter your car Number</span>
                    </label>
                  </div>
                </div>
                <CButton className="insure-you" color="success">
                  &#8594;
                </CButton>
              </div>
              <div className="izIwjg" style={{ textAlign: "center" }}>
                or
              </div>
              <div
                className="bordfe"
                style={{ marginLeft: "16em", marginTop: "-0.4em" }}
              ></div>
              <div
                className="bordfe"
                style={{ marginLeft: "20.5em", marginTop: "-0.15em" }}
              ></div>

              <div
                className="nike1"
                style={{ marginLeft: "10em", marginTop: "2em" }}
              >
                <div>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNiAyNyI+PGcgc3Ryb2tlPSIjNDM0ZjVhIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJNOS4zNyAxOS43ODZoNi42OThNMTguMjkgMjIuMDA1YTIuMjIzIDIuMjIzIDAgMSAwIDAtNC40NDcgMi4yMjMgMi4yMjMgMCAwIDAgMCA0LjQ0N3pNNy4xNDYgMjEuOTY0YTIuMjI0IDIuMjI0IDAgMSAwIDAtNC40NDcgMi4yMjQgMi4yMjQgMCAwIDAgMCA0LjQ0N3oiLz48cGF0aCBkPSJNMTQuNzUyIDEwLjUzYy41MTguMjIxLjk4Ni41NDUgMS4zNzQuOTUybDIuNzYyIDIuOTI4IDMuNTA3LjYzNmExLjc0IDEuNzQgMCAwIDEgMS4xNjMuNzgzIDEuNzQ3IDEuNzQ3IDAgMCAxIC4yMTggMS4zODRsLS4zMzIgMS4zOGExLjYxNyAxLjYxNyAwIDAgMS0xLjU3NCAxLjIxNmgtMS40NjNNNC41MzggMTkuNzgyaC0uODdhMS4yMjYgMS4yMjYgMCAwIDEtLjgxMi0uMzEzIDEuMjMgMS4yMyAwIDAgMS0uNDA1LS43NjdsLS4yNzYtMi42NzlhMS4yNjkgMS4yNjkgMCAwIDEgLjk2Ni0xLjM4MmwuODEyLS4xOTNjLjM3NS0uMDk0LjcwMy0uMzIuOTI1LS42MzZsMS42NzEtMi4zNmEyLjk0NCAyLjk0NCAwIDAgMSAxLjA1NS0uOTI1TTE4Ljg5OCAxNC40MjVsLTE0LjU0LS4xMU0xMS40IDkuMjgxcy0zLjkyMy0uNTYyLTMuMzItMi44NWMuNjA0LTIuMjg5IDQuMjQxLS42MzggMy4zMiAyLjg1ek0xMi4wNyA5LjI4czMuOTUuMzE5IDMuODY4LTIuMDQ2LTMuOTk4LTEuNTU5LTMuODY4IDIuMDQ3ek0xMS42MjggOS42OTF2MTAuNTQ2Ii8+PC9nPjwvc3ZnPg=="
                    alt="car icon"
                    className="sc-dzOgQY fZQyEl"
                    width="50"
                  />
                </div>
                <div style={{ marginTop: "-1.5em", marginLeft: "3em" }}>
                  <p className="bvnLrz">Looking to insure your new car?</p>
                  <p className="bWNltk">Get a quote</p>
                </div>
                <div style={{ marginLeft: "18em", marginTop: "-2em" }}>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgOCAxNCIgd2lkdGg9IjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTUuMDYxMDQgNy4xMTEwNy00Ljk1MDAwMi00Ljk1IDEuNDE0MDAyLTEuNDE0IDYuMzY0IDYuMzY0LTYuMzY0IDYuMzY0MDMtMS40MTQwMDMtMS40MTR6IiBmaWxsPSIjOGE5OWE5Ii8+PC9zdmc+"
                    alt="click here"
                    className="sc-giOsra koNBKd"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {bikefield && (
          <div>
            <FadeIn>
              <div
                className="inpot-form"
                style={{ marginLeft: "4em", border: "1px solid" }}
              >
                <div class="bg dark">
                  <div class="input-cont dark">
                    <input
                      type="text"
                      name="name"
                      autocomplete="off"
                      required
                    />
                    <label for="name" class="label-name">
                      <span class="content-name">Enter your bike Number</span>
                    </label>
                  </div>
                </div>
                <CButton className="insure-you" color="success">
                  &#8594;
                </CButton>
              </div>
              <div className="izIwjg" style={{ textAlign: "center" }}>
                or
              </div>
              <div
                className="bordfe"
                style={{ marginLeft: "16em", marginTop: "-0.4em" }}
              ></div>
              <div
                className="bordfe"
                style={{ marginLeft: "20.5em", marginTop: "-0.15em" }}
              ></div>

              <div
                className="nike1"
                style={{ marginLeft: "10em", marginTop: "2em" }}
              >
                <div>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNiAyNyI+PGcgc3Ryb2tlPSIjNDM0ZjVhIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJNOS4zNyAxOS43ODZoNi42OThNMTguMjkgMjIuMDA1YTIuMjIzIDIuMjIzIDAgMSAwIDAtNC40NDcgMi4yMjMgMi4yMjMgMCAwIDAgMCA0LjQ0N3pNNy4xNDYgMjEuOTY0YTIuMjI0IDIuMjI0IDAgMSAwIDAtNC40NDcgMi4yMjQgMi4yMjQgMCAwIDAgMCA0LjQ0N3oiLz48cGF0aCBkPSJNMTQuNzUyIDEwLjUzYy41MTguMjIxLjk4Ni41NDUgMS4zNzQuOTUybDIuNzYyIDIuOTI4IDMuNTA3LjYzNmExLjc0IDEuNzQgMCAwIDEgMS4xNjMuNzgzIDEuNzQ3IDEuNzQ3IDAgMCAxIC4yMTggMS4zODRsLS4zMzIgMS4zOGExLjYxNyAxLjYxNyAwIDAgMS0xLjU3NCAxLjIxNmgtMS40NjNNNC41MzggMTkuNzgyaC0uODdhMS4yMjYgMS4yMjYgMCAwIDEtLjgxMi0uMzEzIDEuMjMgMS4yMyAwIDAgMS0uNDA1LS43NjdsLS4yNzYtMi42NzlhMS4yNjkgMS4yNjkgMCAwIDEgLjk2Ni0xLjM4MmwuODEyLS4xOTNjLjM3NS0uMDk0LjcwMy0uMzIuOTI1LS42MzZsMS42NzEtMi4zNmEyLjk0NCAyLjk0NCAwIDAgMSAxLjA1NS0uOTI1TTE4Ljg5OCAxNC40MjVsLTE0LjU0LS4xMU0xMS40IDkuMjgxcy0zLjkyMy0uNTYyLTMuMzItMi44NWMuNjA0LTIuMjg5IDQuMjQxLS42MzggMy4zMiAyLjg1ek0xMi4wNyA5LjI4czMuOTUuMzE5IDMuODY4LTIuMDQ2LTMuOTk4LTEuNTU5LTMuODY4IDIuMDQ3ek0xMS42MjggOS42OTF2MTAuNTQ2Ii8+PC9nPjwvc3ZnPg=="
                    alt="car icon"
                    className="sc-dzOgQY fZQyEl"
                    width="50"
                  />
                </div>
                <div style={{ marginTop: "-1.5em", marginLeft: "3em" }}>
                  <p className="bvnLrz">Looking to insure your new car?</p>
                  <p className="bWNltk">Get a quote</p>
                </div>
                <div style={{ marginLeft: "18em", marginTop: "-2em" }}>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgOCAxNCIgd2lkdGg9IjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTUuMDYxMDQgNy4xMTEwNy00Ljk1MDAwMi00Ljk1IDEuNDE0MDAyLTEuNDE0IDYuMzY0IDYuMzY0LTYuMzY0IDYuMzY0MDMtMS40MTQwMDMtMS40MTR6IiBmaWxsPSIjOGE5OWE5Ii8+PC9zdmc+"
                    alt="click here"
                    className="sc-giOsra koNBKd"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {heartfield && (
          <div>
            <FadeIn>
              <div>
                <p className="kToCzn">Arogya Sanjeevani policy, ACKO</p>
                <p className="imYDQ">
                  Standard health insurance plan that’s big on benefits,
                </p>
              </div>

            <div className="mikel">
              <div>
                <img
                  alt="COVID-19 treatment"
                  src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM0MzRmNWEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxwYXRoIGQ9Im0xNi4yMTYyIDI0LjA0NjFjNC40Mjg3IDAgOC4wMTg4LTMuNTkwMiA4LjAxODgtOC4wMTg5cy0zLjU5MDEtOC4wMTg5LTguMDE4OC04LjAxODljLTQuNDI4OCAwLTguMDE4OTMgMy41OTAyLTguMDE4OTMgOC4wMTg5czMuNTkwMTMgOC4wMTg5IDguMDE4OTMgOC4wMTg5eiIvPjxwYXRoIGQ9Im0yMS43NDA3IDIxLjg0MDggMi44NzAxIDIuODg0NSIvPjxwYXRoIGQ9Im0yNC4xNDk0IDE0LjgxN2gzLjg1MDgiLz48cGF0aCBkPSJtOC40NDIxMiAxNi44OTI5LTQuNDQyMTIuNTkxNCIvPjxwYXRoIGQ9Im0xMS41NTczIDIyLjU2Mi0yLjI2NDMzIDMuMDcyIi8+PHBhdGggZD0ibTE1LjE5MTQgOC4wNjcxNC0uNTkxMy00LjA2NzE0Ii8+PC9nPjxwYXRoIGQ9Im0xNi45MjIzIDE0LjgxNjljLjgyODQgMCAxLjQ5OTktLjY3MTYgMS40OTk5LTEuNDk5OSAwLS44Mjg0LS42NzE1LTEuNS0xLjQ5OTktMS41cy0xLjQ5OTkuNjcxNi0xLjQ5OTkgMS41YzAgLjgyODMuNjcxNSAxLjQ5OTkgMS40OTk5IDEuNDk5OXoiIGZpbGw9IiM0MzRmNWEiLz48cGF0aCBkPSJtMTQuNCAxOS4xNTc4Yy41OTc0IDAgMS4wODE3LS40ODQzIDEuMDgxNy0xLjA4MTdzLS40ODQzLTEuMDgxNy0xLjA4MTctMS4wODE3LTEuMDgxNi40ODQzLTEuMDgxNiAxLjA4MTcuNDg0MiAxLjA4MTcgMS4wODE2IDEuMDgxN3oiIGZpbGw9IiM0MzRmNWEiLz48cGF0aCBkPSJtMTkuNTE4MiAxOS4wNTYzYy41OTc0IDAgMS4wODE3LS40ODQzIDEuMDgxNy0xLjA4MTdzLS40ODQzLTEuMDgxNy0xLjA4MTctMS4wODE3LTEuMDgxNy40ODQzLTEuMDgxNyAxLjA4MTcuNDg0MyAxLjA4MTcgMS4wODE3IDEuMDgxN3oiIGZpbGw9IiM0MzRmNWEiLz48cGF0aCBkPSJtNy4xNDM1NSA4LjI5NzEyIDIuMzA3NiAyLjMyMTk4IiBzdHJva2U9IiM0MzRmNWEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBkPSJtMjEuNDUwNyA5Ljk1NTU2IDEuOTYxNC0yLjMyMjAyIiBzdHJva2U9IiM0MzRmNWEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBkPSJtMTYuNzYzMiAyNC4wOTAzLjMxNzMgMi42MjQ5IiBzdHJva2U9IiM0MzRmNWEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48L3N2Zz4="
                  decoding="async"
                  className="sc-iysEgW brSMob"
                />
              </div>
              <p className="easfjy">
                Covers COVID-19 <br />
                treatment
              </p>

              <div style={{ marginTop: "2em" }}>
                <img
                  alt="Save tax"
                  src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM0MzRmNWEiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJtMTEuNzU5OCA1LjM0NjkyaDUuMDMwMyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJiZXZlbCIvPjxwYXRoIGQ9Im0xMS43NTk4IDcuNzQyNjhoNS4wMzAzIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49ImJldmVsIi8+PHBhdGggZD0ibTEyLjE5NDMgNS4zMzMzN2gxLjMyNDVjLjQwMzYgMCAuNzkwNy4xNjAzNiAxLjA3Ni40NDU3Ni4yODU0LjI4NTM5LjQ0NTkuNjcyNDYuNDQ1OSAxLjA3NjA2djEuNzc1NDRjMCAuNDExMDgtLjE2MzQuODA1MjYtLjQ1NDEgMS4wOTU5My0uMjkwNy4yOTA2NC0uNjg1LjQ1NDA0LTEuMDk2LjQ1NDA0aC0xLjI5NjNsMi44ODg3IDIuOTAyNiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJiZXZlbCIvPjxwYXRoIGQ9Im05Ljc4NjA0IDkuNTYwMzRjLTEuMzI0NzUuNjQzMDYtMi40NDM1MyAxLjY0MzM2LTMuMjMwMjYgMi44ODgxNi0uNzg2NzIgMS4yNDQ4LTEuMjA5OTcgMi42ODQ3LTEuMjIyMjcgNC4xNTcyLS4wMDI5MSAxLjQyOTEuMzcyMjQgMi44MzM3IDEuMDg3NDIgNC4wNzEuNzE1MTggMS4yMzc0IDEuNzQ0OCAyLjI2MzUgMi45ODQ2NCAyLjk3NDN2My4wMTU1aDMuNzQ4MDN2LTIuMTQxOWgyLjk0NXYyLjE0MTloMy43MzM5di0yLjg4ODZjMS43Mzc2LS43ODcyIDMuMTE5Mi0yLjE5NCAzLjg3NS0zLjk0NTVoMS43ODk1di01Ljc0ODloLTEuNTkyMWMtLjI3OS0uODEyMy0uNjg4NC0xLjU3MzgtMS4yMTE5LTIuMjU0NmwuMzY2NC0zLjQ1MjIxYy4wMDM4LS4wNDE4LS4wMDM1LS4wODM4NC0uMDIxLS4xMjE5NS0uMDE3Ni0uMDM4MTItLjA0NDktLjA3MDk1LS4wNzkxLS4wOTUyMS0uMDM0My0uMDI0MjYtLjA3NDItLjAzOTA3LS4xMTYtLjA0M3MtLjA4MzkuMDAzMTktLjEyMjEuMDIwNjRsLTIuOTE2NSAxLjQwOTA3Yy0uMzc3LS4xODE2OS0uNzY4My0uMzMyNS0xLjE2OTctLjQ1MDkxIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48L2c+PHBhdGggZD0ibTE5LjE0MjUgMTUuNjA1MmMuNDk4MSAwIC45MDE4LS40MDM3LjkwMTgtLjkwMTggMC0uNDk4LS40MDM3LS45MDE4LS45MDE4LS45MDE4LS40OTggMC0uOTAxOC40MDM4LS45MDE4LjkwMTggMCAuNDk4MS40MDM4LjkwMTguOTAxOC45MDE4eiIgZmlsbD0iIzQzNGY1YSIvPjwvc3ZnPg=="
                  decoding="async"
                  className="sc-iysEgW brSMob"
                />
              </div>
              <p className="easfjy">
                Save tax up to <br />
                ₹25,000
              </p>

            <div className="jeans">
              <div>
                <img
                  alt="Cashless claims"
                  src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjIuMDIwOCAyMy44OTVjLjAwMTkuMzYzMy0uMDY3OS43MjM0LS4yMDU2IDEuMDU5Ni0uMTM3Ni4zMzYyLS4zNDA1LjY0MTktLjU5NjcuODk5NC0uMjU2Mi4yNTc2LS41NjA4LjQ2MTktLjg5NjMuNjAxNC0uMzM1NC4xMzk1LS42OTUzLjIxMTMtMS4wNTg2LjIxMTNoLTguNTA2NWMtLjczMjUtLjAwMzktMS40MzM4Ni0uMjk3Ni0xLjk1MDQ3LS44MTctLjUxNjYyLS41MTkzLS44MDY2NC0xLjIyMjItLjgwNjYzLTEuOTU0N3YtMTUuNzg5OWMtLjAwMDAxLS43MzI1Ni4yOTAwMS0xLjQzNTM3LjgwNjYzLTEuOTU0NzUuNTE2NjEtLjUxOTM4IDEuMjE3OTctLjgxMzA4IDEuOTUwNDctLjgxNjk4aDguNTA2NWMuMzYzMyAwIC43MjMyLjA3MTczIDEuMDU4Ni4yMTEyLjMzNTUuMTM5NDcuNjQwMS4zNDM4OS44OTYzLjYwMTQ2cy40NTkxLjU2MzMuNTk2Ny44OTk0OWMuMTM3Ny4zMzYyLjIwNzUuNjk2MjkuMjA1NiAxLjA1OTU4IiBzdHJva2U9IiM0MzRmNWEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBkPSJtMTUuMDE5MiAyMi44MTgzYy41MTI5IDAgLjkyODgtLjQxNTguOTI4OC0uOTI4OHMtLjQxNTktLjkyODgtLjkyODgtLjkyODhjLS41MTMgMC0uOTI4OS40MTU4LS45Mjg5LjkyODhzLjQxNTkuOTI4OC45Mjg5LjkyODh6IiBmaWxsPSIjNDM0ZjVhIi8+PGcgc3Ryb2tlPSIjNDM0ZjVhIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49ImJldmVsIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0ibTE5LjY3NjMgMTAuODAyOWg1LjE2MDEiLz48cGF0aCBkPSJtMTkuMjE4OCAxNC4yMjM5aDUuNTI4NiIvPjxwYXRoIGQ9Im0xOS40MjU4IDEwLjgwMjloLjM1MzhjLjg1MTIuMDAzOCAxLjY2NjQuMzQzNyAyLjI2ODQuOTQ1Ni42MDE5LjYwMTkuOTQxNiAxLjQxNzEuOTQ1NSAyLjI2ODQgMCAuODUzNy0uMzM4MiAxLjY3MjgtLjk0MDUgMi4yNzc4LS42MDIzLjYwNTEtMS40MTk2Ljk0Ny0yLjI3MzQuOTUwOWgtLjM1MzhsMy41Njc3IDMuNTUzMiIvPjwvZz48L3N2Zz4="
                  decoding="async"
                  className="sc-iysEgW brSMob"
                />
              </div>
              <p className="easfjy">
                Cashless claims <br />
                in 6000+ hospitals
              </p>
              </div>

            <div className="jeans-1">
              <div>
                <img
                  alt="Lifetime Renewability"
                  src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM0MzRmNWEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxwYXRoIGQ9Im0yMS4zMzggNy4zMTA5MWMxLjU2MzQuMjIyNjYgMi45ODMxIDEuMDMzMDcgMy45Njk2IDIuMjY2MTguOTg2NCAxLjIzMzExIDEuNDY1NCAyLjc5NjAxIDEuMzM5NCA0LjM3MDExIDAgNy4zNDMzLTkuNzk1NiAxMS44NzM0LTEwLjIxNCAxMi4wNjA5bC0uNDMyOC4yMDItLjQzMjktLjIwMmMtLjQxODQtLjE4NzUtMTAuMjE0MDItNC43MTc2LTEwLjIxNDAyLTEyLjA2MDktLjEyNTk1LTEuNTc0MS4zNTMtMy4xMzcgMS4zMzk0OS00LjM3MDExLjk4NjQ4LTEuMjMzMTEgMi40MDYxNC0yLjA0MzUyIDMuOTY5NTMtMi4yNjYxOC45NzU3LS4xNjIyOCAxLjk3NjUtLjA3NTUxIDIuOTA5Ny4yNTIzNi45MzMxLjMyNzg4IDEuNzY4NC44ODYyMSAyLjQyODIgMS42MjMxMmwyLTEuMTg1NTQiLz48cGF0aCBkPSJtMjQuNTExNSA1LjMzMzM3LTMuNzM2NiAxLjAwOTg5IDEuMDgyIDQuMDEwNjQiLz48cGF0aCBkPSJtMTEuOTAxOSAxNi4xMTE1aDguMTgiLz48cGF0aCBkPSJtMTYuMDU4MSAxMS45NTUzdjguMTk0NSIvPjwvZz48L3N2Zz4="
                  decoding="async"
                />
              </div>

              <p className="easfjy">
                Broad
                <br />
                Coverages
              </p>
              </div>

              </div>

              <div>
                <button className="luLaI">Get started</button>
              </div>
            </FadeIn>
          </div>
        )}
      </div>
    </div>
  );
}

export default Resbikecarheart;
