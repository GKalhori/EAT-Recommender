import React from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./HomePage.elements";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";
import { useRef } from "react";

const HomePage = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* part 1 */}
      <InfoSec lightBg={false}>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={true}>
                  {"در میان انبوهی از ابزارهای مدیریت پروژه سرگردانید؟"}
                </TopLine>
                <Heading lightText={true}>
                  {
                    "بهترین ابزار مدیریتی برای معماری سازمانی خود را از ما بخواهید..."
                  }
                </Heading>
                <Subtitle lightTextDesc={true}>
                  {
                    "هر يك از ابزارها ويژگی ها، توانايی ها، مزايا و معايب خاص خود را دارند كه بسته به هدف، عمق، كاربران و نيازهای ذی نفعان مورد استفاده قرار ميگيرند. مهم تر از خصوصيات و قابليت‌های ابزار، دانستن هدف استفاده از ابزار است."
                  }
                </Subtitle>
                <Button big fontBig primary={true} onClick={handleClick}>
                  {"به راهنمایی نیاز دارم"}
                </Button>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <Img
                  src={require("../../assets/images/header_pic_1.png")}
                  alt={"ea"}
                />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>

      {/* part 2 */}
      <InfoSec lightBg={true} ref={ref}>
        <Container>
          <InfoRow imgStart={""}>
            <InfoColumn>
              <ImgWrapper>
                <Img
                  src={require("../../assets/images/header_pic_2.png")}
                  alt={"ea"}
                />
              </ImgWrapper>
            </InfoColumn>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={false}>{"روند کار چگونه است؟"}</TopLine>
                <Heading lightText={false}>
                  {"تنها نیاز است که ثبت نام کنید و به تعدادی سوال پاسخ دهید!"}
                </Heading>
                <Subtitle lightTextDesc={false}>
                  {
                    "در صورتیکه از قبل ثبت نام کرده و وارد سامانه شده اید، بر روی دکمه زیر کلیک کنید."
                  }
                </Subtitle>
                <Link to={"/questionnaire"}>
                  <Button big fontBig primary={false}>
                    {"شروع پرسشنامه"}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default HomePage;
