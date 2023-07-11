import { useEffect, useState } from "react";
import styled from "styled-components";
import { primary, third, fourth } from "@/lib/colors";

const IBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1vw;
  text-align: center;
`;
const Time = styled.span`
  padding: 1vh;
  background-color: ${fourth};
  color: ${primary};
  display: grid;
  grid-template-rows: 2fr 1fr;
  margin: 5vh 0px;
  big {
    font-weight: 600;
    font-size: 2.5rem;
  }
  small {
    font-size: 1.2rem;
    font-weight: 200;
  }
`;


export default function timer() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("07/14/2023 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <IBox>
    <Time>
      <big>{days}</big>
      <small>Days</small>
    </Time>
    <Time>
      <big>{hours}</big>
      <small>Hours</small>
    </Time>
    <Time>
      <big>{minutes}</big>
      <small>Min</small>
    </Time>
    {/* <Time>
    <big>{seconds}</big>
      <small>Seconds</small>
    </Time> */}
  </IBox>
  );
}
