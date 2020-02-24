import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
<<<<<<< HEAD:bts-react/src/containers/MemberProfile.js
import Header from '../components/Header';
=======
import Header from '../component/Header';
import Footer from '../component/Footer';
>>>>>>> upstream/master:bts-react/src/container/Profile.js


 // BTS 멤버 소개 페이지

 const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(9),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

class MemberProfile extends React.Component {

    render() {
        return (
            <React.Fragment>

                <Header />
                <div style={{marginLeft: "5rem", marginTop: "3rem", marginRight: "5rem"}}>
                    <div align = 'center' style={{margin: "auto", textAlign: "center", marginBottom: "1rem"}}>
                    <h1>BTS</h1>
                    2013년 데뷔해 국내외 신인상을 휩쓴 방탄소년단은 3년 만에 명실상부 한국을 대표하는 최정상 보이 그룹으로 성장했다.
                     현재는 아시아를 넘어 북미, 유럽, 남미, 중동에 이르기까지 전 세계 방탄소년단 열풍을 일으키며 글로벌 슈퍼스타로 우뚝 섰다. 
                    미국 빌보드, 영국 오피셜 차트, 일본 오리콘, 아이튠즈, 스포티파이, 애플뮤직 등 세계 유수의 차트에서 기록한 성적이 이를 증명하고 있으며 음반 판매량, 뮤직비디오 조회수, SNS 지수 등에서도 독보적인 수치를 기록 중이다. 
                    또한, 스타디움 투어를 개최하며 전 세계 콘서트 시장에서도 글로벌 아티스트로서의 면모를 이어가고 있으며, UN 연설 및 LOVE MYSELF 캠페인 등을 통해 선한 영향력을 실천하고 있다.
                    </div> 
     
                <div className={useStyles.paper} align = 'center'>
                <h1>Members</h1>
                    <img src="http://armyzip.com/files/attach/images/42769/605/043/e75e43c2e4002dadba03d38b16aaaaf9.jpg"/>
                        <h3>RM</h3><br />
                        1994. 09. 12 │ #RM, #ナム, #MON_STUDIO<br />
                        이름: 김남준 (金南俊, Kim Namjoon)<br />
                        신체: 181cm, 67kg<br />
                        출생: 경기도 고양시<br />
                        포지션: 리더, 래퍼, 작곡, 작사, 프로듀싱<br /><br /><br />
                    
     
                    <img src="http://armyzip.com/files/attach/images/42769/605/043/e149dbffcf2b96b390444403ca55f34f.jpg"/>
                        <h3>JIN</h3><br />
                        1992.12.04  |  #EATJIN #HYUNG<br />
                        이름: 김석진 (金碩珍, Kim Seokjin)<br />
                        신체: 179cm, 63kg<br />
                        출생: 경기도 과천<br />
                        포지션: 보컬, 작곡, 작사<br /><br /><br />
                    
     
                    <img src="http://armyzip.com/files/attach/images/42769/605/043/ebb273d851a7839533658f06ea00423d.jpg"/>
                        <h3>SUGA</h3><br />
                        1993.03.09  |  #GENIUSLAB<br />
                        이름: 민윤기(閔玧其, Min Yoon-gi)<br />
                        신체: 174cm, 59kg<br />
                        출생: 대구<br />
                        포지션: 래퍼, 작곡, 작사, 프로듀싱<br /><br /><br />
                    
    
                    <img src="http://armyzip.com/files/attach/images/42769/605/043/172c275ab282728230f9a4ceaf375c3c.jpg"/>
                     <h3>J-HOPE</h3><br />
                        1994.02.18  |  #HOBI, #HOPEWORLD<br />
                        이름: 정호석 (鄭號錫, Jeong Hoseok)<br />
                        신체: 177cm, 65kg<br />
                        출생: 광주<br />
                        포지션: 래퍼, 작곡, 작사, 댄서<br /><br /><br />
                    
    
                    <img src="http://armyzip.com/files/attach/images/42769/605/043/2fb65edc25b7cffa191e4eb07b1c20b5.jpg"/>
                    <h3>Jimin</h3><br />                    
                        1995.10.13  |  #CHIMCHIM<br />
                        이름: 박지민 (朴智旻, Park Jimin)<br />
                        신체: 173.6cm, 61kg<br />
                        출생: 부산<br />
                        포지션: 보컬, 댄서, 작곡, 작사<br /><br /><br />
                
    
                    <img src="http://armyzip.com/files/attach/images/42769/605/043/7ec5f86731cb5c5563c5a96a3ab2e4fd.jpg"/>
                    <h3>V</h3><br />
                        1995.12.30  |  #TT
                        이름: 김태형 (金泰亨, Kim Taehyung)<br />
                        신체: 178cm, 62kg<br />
                        출생: 대구, 거창<br />
                        포지션: 보컬, 작곡, 작사<br /><br /><br />
                    
    
                    <img src="http://armyzip.com/files/attach/images/42769/605/043/6fe48222503abacf19d947df98561347.jpg"/>
                        <h3>JUNGKOOK</h3> <br />
                            1997.09.01  |  #KOOKIE<br />
                        이름: 전정국 (田柾國, Jeon Jungkook)<br />
                        신체: 178cm, 66kg<br />
                        출생: 부산<br />
                        포지션: 보컬, 래퍼, 댄서, 작곡, 작사<br />
                    
                    </div>
                <div className={useStyles.paper} >
                <h1>DISCOGRAPHY</h1>
                    <ul>
                        <li>2013.06.12. Single Album [2 COOL 4 SKOOL]</li>
                        <li>2013.09.11. 1st Mini Album [O!RUL8,2?]</li>
                        <li>2014.02.12. 2nd Mini Album [Skool Luv Affair]</li>
                        <li>2014.05.14. 2nd Mini Special Addition Album [SKOOL LUV AFFAIR SPECIAL ADDITION]</li>
                        <li>2014.08.20. 1st Album [DARK&WILD]</li>
                        <li>2015.04.29. 3rd Mini Album [화양연화 pt.1]</li>
                        <li>2015.11.30. 4th Mini Album [화양연화 pt.2]</li>
                        <li>2016.05.02. Special Album [화양연화 Young Forever]</li>
                        <li>2016.10.10. 2nd Album [WINGS]</li>
                        <li>2017.02.13. 2nd Album Repackage [WINGS 외전 : You Never Walk Alone]</li>
                        <li>2017.09.18. 5th Mini Album [LOVE YOURSELF 承 'Her']</li>
                        <li>2018.05.18. 3rd Album [LOVE YOURSELF 轉 'Tear']</li>
                        <li>2018.08.24. 3rd Album Repackage [LOVE YOURSELF 結 'Answer']</li>
                        <li>2019.04.12. 6th Mini Album [MAP OF THE SOUL : PERSONA]</li>
                        <li>2014.06.04. Single Album [No More Dream (Japanese Ver.)]</li>
                        <li>2014.07.16. Single Album [Boy In Luv (Japanese Ver.)]</li>
                        <li>2014.11.19. Single Album [Danger (Japanese Ver.)]</li>
                        <li>2014.12.24. Japan 1st Album [Wake Up]</li>
                        <li>2015.06.17. Single Album [FOR YOU]</li>
                        <li>2015.12.08. Single Album [I NEED U (Japanese Ver.)]</li>
                        <li>2016.03.15. Single Album [RUN (Japanese Ver.)]</li>
                        <li>2016.09.07. Japan 2nd Album [YOUTH]</li>
                        <li>2017.05.10. Single Album [血、汗、涙 (Japanese Ver.)]</li>
                        <li>2017.12.06. Single Album [MIC Drop/DNA/Crystal Snow]</li>
                        <li>2018.04.04. Japan 3rd Album [FACE YOURSELF]</li>
                        <li>2018.11.07. Single Album [FAKE LOVE/Airplane pt.2]</li>
                    </ul>
    
                <h1>DVD/Blu-ray</h1>
                    <ul>
                        <li>2014.04.09. [BTS NOW IN THAILAND]</li>
                        <li>2014.08.27. [防弾少年団 1st JAPAN SHOWCASE -NEXT STAGE- in Zepp TOKYO]</li>
                        <li>2014.11.14. [BTS 2015 SEASON’S GREETINGS]</li>
                        <li>2015.02.16. [BTS NOW2 IN EUROPE ＆ AMERICA]</li>
                        <li>2015.03.18. [新人王防弾少年団(신인왕 방탄소년단)－チャンネルバンタン(채널 방탄)]</li>
                        <li>2015.05.20. [防弾少年団 1st JAPAN TOUR 2015「WAKE UP:OPEN YOUR EYES」] (DVD, Blu-ray)</li>
                        <li>2015.06.10. [BTS MEMORIES OF 2014] JPN ver</li>
                        <li>2015.06.16. [BTS MEMORIES OF 2014]</li>
                        <li>2015.06.16. [BTS MEMORIES OF 2014]</li>
                        <li>2015.07.22. [BTS SUMMER PACKAGE IN KOTA KINABALU 2015]</li>
                        <li>2015.12.09. [BTS 2016 SEASON’S GREETINGS]</li>
                        <li>2016.01.13. [防弾少年団 JAPAN OFFICIAL FAN MEETING VOL.2 -UNDERCOVER MISSION-]</li>
                        <li>2016.02.23. [2015 BTS LIVE [화양연화 on stage] CONCERT]</li>
                        <li>2016.03.15. [2015 BTS LIVE [花様年華 on stage] ~Japan Edition~ at YOKOHAMA ARENA] (DVD, Blu-ray)</li>
                        <li>2016.04.05. [BTS NOW3 IN CHICAGO]</li>
                        <li>2016.06.21. [BTS MEMORIES OF 2015]</li>
                        <li>2016.08.12. [BTS SUMMER PACKAGE IN DUBAI 2016]</li>
                        <li>2016.12.09. [BTS 2017 SEASON’S GREETINGS]</li>
                        <li>2017.01.18. [2016 BTS LIVE 화양연화 ON STAGE : CONCERT]</li>
                        <li>2017.01.25. [防弾少年団/2016 BTS LIVE＜花様年華 on stage: epilogue＞～Japan Edition～ 통상반] (DVD, Blu-ray)</li>
                        <li>2017.01.25. [防弾少年団/2016 BTS LIVE＜花様年華 on stage: epilogue＞～Japan Edition～ 호화첫회한정판] (DVD, Blu-ray)</li>
                        <li>2017.03.30. [BTS 3RD MUSTER [ARMY.ZIP+]</li>
                        <li>2017.07.31. [BTS MEMORIES OF 2016]</li>
                        <li>2017.08.02. [2017 BTS SUMMER PACKAGE VOL.3]</li>
                        <li>2017.08.02. [BTS (防弾少年団)/防弾少年団 JAPAN OFFICIAL FANMEETING VOL.3 ～君に届く～] (DVD)</li>
                        <li>2017.09.20. [BTS (防弾少年団)/防弾少年団 JAPAN OFFICIAL FANMEETING VOL.3 ～君に届く～] (Blu-ray)</li>
                        <li>2017.10.30. [2017 BTS Live Trilogy EPISODE Ⅲ THE WINGS TOUR in Seoul DVD]</li>
                        <li>2017.12.15. [BTS 2018 SEASON’S GREETINGS]</li>
                        <li>2017.12.27. [BTS(防弾少年団)/2017 BTS LIVE TRILOGY EPISODE III THE WINGS TOUR ～JAPAN EDITION～ 통상반] (DVD, Blu-ray)</li>
                        <li>2017.12.27 [BTS(防弾少年団)/2017 BTS LIVE TRILOGY EPISODE III THE WINGS TOUR ～JAPAN EDITION～ 초회한정반] (DVD, Blu-ray)</li>
                        <li>2018.06.27. [BTS MEMORIES OF 2017] (DVD)</li>
                        <li>2018.07.11. [2017 BTS LIVE TRILOGY EPISODE III THE WINGS TOUR IN JAPAN ~SPECIAL EDITION~ at KYOCERA DOME 통상반-유니버셜한정반] (DVD, Blu-ray)</li>
                        <li>2018.07.11. [2017 BTS LIVE TRILOGY EPISODE III THE WINGS TOUR IN JAPAN ~SPECIAL EDITION~ at KYOCERA DOME 통상반-첫회반] (DVD, Blu-ray)</li>
                        <li>2018.07.11. [2017 BTS LIVE TRILOGY EPISODE III THE WINGS TOUR IN JAPAN ~SPECIAL EDITION~ at KYOCERA DOME 첫회한정반-유니버셜한정반] (DVD, Blu-ray)</li>
                        <li>2018.07.11. [2017 BTS LIVE TRILOGY EPISODE III THE WINGS TOUR IN JAPAN ~SPECIAL EDITION~ at KYOCERA DOME 첫회한정반-첫회반] (DVD, Blu-ray)</li>
                        <li>2018.08.14. [2018 BTS SUMMER PACKAGE VOL.4] (in SAIPAN)</li>
                        <li>2018.08.24. [BTS MEMORIES OF 2017] (Blu-ray)</li>
                        <li>2018.10.31. [BTS 4th MUSTER Happy Ever After] (DVD, Blu-ray)</li>                    
                        <li>2018.12.04 [BTS JAPAN OFFICIAL FANMEETING VOL 4 Happy Ever After] (DVD, Blu-ray)</li>
                        <li>2018.12.28. [BTS 2019 SEASON’S GREETINGS]</li>
                        <li>2019.03.27. [BTS LOVE YOURSELF SEOUL DVD]</li>
                        <li>2019.04.23. [BTS LOVE YOURSELF SEOUL Blu-ray]</li>
                    </ul>
                </div>
    
                <div className={useStyles.paper} >
                <h1>CONCERT</h1>
                    <ul>
                        <li>2014.10. BTS 2014 LIVE TRILOGY: EPISODE Ⅱ. THE RED BULLET (3회, 서울)</li>
                        <li>2015.02. BTS 1ST JAPAN TOUR 2015 WAKE UP: OPEN YOUR EYES (6회, 일본)</li>
                        <li>2015.03. 2015 BTS LIVE TRILOGY: EPISODE I. BTS BEGINS (2회, 서울)</li>
                        <li>2015.06.-08. 2015 BTS LIVE TRILOGY: EPISODE II. THE RED BULLET (12회, 말레이시아, 호주, 미국, 멕시코, 브라질, 칠레, 태국, 홍콩)</li>
                        <li>2015.11.-2016.03. 2015 BTS LIVE [화양연화 ON STAGE](7회, 서울, 일본)</li>
                        <li>2016.05.-08. 2016 BTS LIVE [화양연화 ON STAGE : EPILOGE] (12회, 서울, 중화민국, 마카오, 중국, 일본, 필리핀, 태국)</li>
                        <li>2017.02.-11. 2017 BTS LIVE TRILOGY EPISODE III. THE WINGS TOUR (37회, 서울, 칠레, 브라질, 미국, 태국, 인도네시아, 필리핀, 홍콩, 호주, 일본, 타이페이, 멕시코)</li>
                        <li>2017.12.08.-10. 2017 BTS LIVE TRILOGY EPISODE III. THE WINGS TOUR THE FINAL (3회, 서울)</li>
                        <li>2018.08.25.-2019.04.07 BTS WORLD TOUR LOVE YOURSELF (42회, 서울, 미국, 캐나다, 영국, 네덜란드, 독일, 프랑스, 일본, 대만, 홍콩, 태국)</li>
                        <li>2019.05.04 BTS WORLD TOUR LOVE YOURSELF: SPEAK YOURSELF (16회+, 미국, 브라질, 영국, 일본, 추가예정)</li>
                    </ul>
                    </div>
    
                <div classname={useStyles.paper} >
                    <h1>EVENT</h1>
                    <ul>
                        <li>2014.03.29. BTS 1ST FAN MEETING 'MUSTER’</li>
                        <li>2015.10.29. Halloween Party with BTS</li>
                        <li>2015.12.01.-08. Butterfly Dream：BTS Open Media Exhibition</li>
                        <li>2016.01.24. BTS 2ND MUSTER [ZIP CODE : 22920]</li>
                        <li>2016.06.13. Happy BTS Day Party</li>
                        <li>2016.11.12.-13. BTS 3RD MUSTER [ARMY.ZIP+]</li>
                        <li>2017.06.13. 2017 BTS HOME PARTY</li>
                        <li>2018.01.13.-14. BTS 4TH MUSTER [Happy Ever After]</li>
                        <li>2018.06.13. 2018 BTS PROM PARTY [-RE;VIEW & PRE;VIEW-]</li>
                        <li>2018.08.25-10.28. 2018 BTS EXHIBITION ‘오, 늘’</li>
                        <li>2019.02.22-04.02. ARMYPEDIA</li>
                        <li>2019.06.15-16. BTS 5TH MUSTER [매직샵] 부산</li>
                        <li>2019.06.22-23. BTS 5TH MUSTER [매직샵] 서울</li>
                
                    </ul>
                    </div>
    
                    <div className={useStyles.paper} >
                        <h1>ACHIEVEMENT</h1>
                    <ul>
                        <li>2015.05.05. SBS MTV 《THE SHOW》 "I NEED U" 더 쇼 초이스 1위</li>
                        <li>2015.05.07. Mnet 《엠카운트다운》 "I NEED U" 1위</li>
                        <li>2015.05.08. KBS2 《뮤직뱅크》 "I NEED U" 1위</li>
                        <li>2015.05.12. SBS MTV 《THE SHOW》 "I NEED U" 더 쇼 초이스 1위 (2주 연속)</li>                    <li></li>
                        <li>2015.05.13. MBC MUSIC 《쇼 챔피언》 "I NEED U" 1위</li>
                        <li>2015.12.08. SBS MTV 《THE SHOW》 "RUN" 더 쇼 초이스 1위</li>
                        <li>2015.12.09. MBC MUSIC 《쇼 챔피언》 "RUN" 1위</li>
                        <li>2015.12.11. KBS2 《뮤직뱅크》 "RUN" 1위</li>
                        <li>2015.12.16. MBC MUSIC 《쇼 챔피언》 "RUN" 1위 (2주 연속)</li>
                        <li>2016.01.08. KBS2 《뮤직뱅크》 "RUN" 1위 (통산 2주)</li>
                        <li>2016.05.12. Mnet 《엠카운트다운》 "불타오르네" 1위</li>
                        <li>2016.05.13. KBS2 《뮤직뱅크》 "불타오르네" 1위</li>
                        <li>2016.05.15. SBS 《인기가요》 "불타오르네" 1위</li>
                        <li>2016.10.19. MBC MUSIC 《쇼 챔피언》 "피 땀 눈물" 1위</li>
                        <li>2016.10.20. Mnet 《엠카운트다운》 "피 땀 눈물" 1위</li>
                        <li>2016.10.21. KBS2 《뮤직뱅크》 "피 땀 눈물" 1위</li>
                        <li>2016.10.23. SBS 《인기가요》 "피 땀 눈물" 1위</li>
                        <li>2016.10.25. SBS MTV 《THE SHOW》 "피 땀 눈물" 더 쇼 초이스 1위</li>
                        <li>2016.10.28. KBS2 《뮤직뱅크》 "피 땀 눈물" 1위 (2주 연속)</li>
                        <li>2017.02.22. MBC MUSIC 《쇼 챔피언》 "봄날" 1위</li>
                        <li>2017.02.23. Mnet 《엠카운트다운》 "봄날" 1위</li>
                        <li>2017.02.24. KBS2 《뮤직뱅크》 "봄날" 1위</li>
                        <li>2017.02.26. SBS 《인기가요》 "봄날" 1위</li>
                        <li>2017.09.26. SBS MTV 《THE SHOW》 "DNA" 더 쇼 초이스 1위</li>
                        <li>2017.09.27. MBC MUSIC 《쇼 챔피언》 "DNA" 1위</li>
                        <li>2017.09.28. Mnet 《엠카운트다운》 "DNA" 1위</li>
                        <li>2017.09.29. KBS2 《뮤직뱅크》 K-Chart  "DNA" 1위</li>
                        <li>2017.10.01. SBS 《인기가요》 "DNA" 1위</li>
                        <li>2017.10.05. Mnet 《엠카운트다운》 "DNA" 1위 (2주 연속)</li>
                        <li>2017.10.06. KBS2 《뮤직뱅크》 K-Chart "DNA" 1위 (2주 연속)</li>
                        <li>2017.10.08. SBS 《인기가요》 "DNA" 1위 (2주 연속)</li>
                        <li>2017.10.13. KBS2 《뮤직뱅크》 K-Chart "DNA" 1위 (3주 연속)</li>
                        <li>2017.10.15. SBS 《인기가요》 "DNA" 1위 (3주 연속)</li>
                        <li>2018.05.25. KBS2 《뮤직뱅크》 K-Chart "FAKE LOVE" 1위</li>
                        <li>2018.05.26. MBC 《쇼 음악중심》 "FAKE LOVE" 1위</li>
                        <li>2018.05.27. SBS 《인기가요》 "FAKE LOVE" 1위</li>
                        <li>2018.05.30. MBC MUSIC 《쇼 챔피언》 "FAKE LOVE" 1위</li>
                        <li>2018.05.31. Mnet 《엠카운트다운》 "FAKE LOVE" 1위</li>
                        <li>2018.06.01. KBS2 《뮤직뱅크》 K-Chart "FAKE LOVE" 1위 (2주 연속)</li>
                        <li>2018.06.02. MBC 《쇼 음악중심》 "FAKE LOVE" 1위 (2주 연속)</li>
                        <li>2018.06.03. SBS 《인기가요》 "FAKE LOVE" 1위 (2주 연속)</li>
                        <li>2018.06.07. Mnet 《엠카운트다운》 "FAKE LOVE" 1위 (2주 연속)</li>
                        <li>2018.06.08. KBS2 《뮤직뱅크》 K-Chart "FAKE LOVE" 1위 (3주 연속)</li>
                        <li>2018.06.09. MBC 《쇼 음악중심》 "FAKE LOVE" 1위 (3주 연속)</li>
                        <li>2018.06.10. SBS 《인기가요》 "FAKE LOVE" 1위 (3주 연속)</li>
                        <li>2018.08.31. KBS2 《뮤직뱅크》 K-Chart "IDOL" 1위</li>
                        <li>2018.09.02. SBS 《인기가요》 "IDOL" 1위</li>
                        <li>2018.09.05 MBC MUSIC 《쇼 챔피언》 "IDOL" 1위</li>
                        <li>2018.09.07. KBS2 《뮤직뱅크》 K-Chart "IDOL" 1위 (2주 연속)</li>
                        <li>2018.09.09. SBS 《인기가요》 "IDOL" 1위 (2주 연속)</li>
                        <li>2018.09.12 MBC MUSIC 《쇼 챔피언》 "IDOL" 1위 (2주 연속)</li>
                        <li>2018.09.14. KBS2 《뮤직뱅크》 K-Chart "IDOL" 1위 (3주 연속)</li>
                        <li>2018.09.16. SBS 《인기가요》 "IDOL" 1위 (3주 연속)</li>
                        <li>2019.04.19. KBS2 《뮤직뱅크》 K-Chart "작은 것들을 위한 시(Boy With Luv)" 1위</li>
                        <li>2019.04.20. MBC 《쇼 음악중심》 "작은 것들을 위한 시(Boy With Luv)" 1위</li>
                        <li>2019.04.24. MBC MUSIC 《쇼 챔피언》 "작은 것들을 위한 시(Boy With Luv)" 1위</li>
                        <li>2019.04.25. Mnet 《엠카운트다운》 "작은 것들을 위한 시(Boy With Luv)" 1위</li>
                        <li>2019.04.26. KBS2 《뮤직뱅크》 K-Chart "작은 것들을 위한 시(Boy With Luv)" 1위 (2주 연속)</li>
                        <li>2019.04.27. MBC 《쇼 음악중심》 "작은 것들을 위한 시(Boy With Luv)" 1위 (2주 연속)</li>
                        <li>2019.04.28. SBS 《인기가요》 "작은 것들을 위한 시(Boy With Luv)" 1위</li>
                        <li>2019.05.03. KBS2 《뮤직뱅크》 K-Chart "작은 것들을 위한 시(Boy With Luv)" 1위 (3주 연속)</li>
                        <li>2019.05.11. MBC 《쇼 음악중심》 "작은 것들을 위한 시(Boy With Luv)" 1위 (3회)</li>
                        <li>2019.05.12. SBS 《인기가요》 "작은 것들을 위한 시(Boy With Luv)" 1위 (2회)</li>
                    </ul>
    
                    <h1>AWARD</h1>
                    <ul>
                        <li>2013.06.12. Single Album [2 COOL 4 SKOOL]</li>
                        <li>2013.09.11. 1st Mini Album [O!RUL8,2?]</li>
                        <li>2013.11.14. 《멜론 뮤직 어워드》 신인상</li>
                        <li>2013.12.06. 《So-Loved Awards》 신인상, 올해 최고의 싱글</li>
                        <li>2014.01.16. 《골든디스크》 음반부문 신인상</li>
                        <li>2014.01.23. 《하이원 서울가요대상》 신인상</li>
                        <li>2014.02.12. 《가온 차트 K-POP 어워드》 올해의 신인상</li>
                        <li>2014.04.15. 《인위에타이 V차트 어워드》 신인상</li>
                        <li>2015.01.15. 《일본 골든디스크》 Best New Artist, Best 3 New Artists Award</li>
                        <li>2015.01.15. 《골든디스크》 음반 본상</li>
                        <li>2015.01.22. 《하이원 서울가요대상》 본상</li>
                        <li>2015.01.28. 《가온 차트 K-POP 어워드》 올해의 발견 월드루키상</li>
                        <li>2015.03.13. 《케이블TV 방송대상》 한류부문 인기상</li>
                        <li>2015.10.15. 《MTV Europe Music Awards 2015》 Worldwide Act:Asia 부문 한국 최우수 가수</li>
                        <li>2015.11.07. 《멜론 뮤직 어워드》 남자 댄스 부문 (I NEED U)</li>
                        <li>2015.12.02. 《엠넷 아시안 뮤직 어워드》 월드 퍼포먼스</li>
                        <li>2015.12.18. 《Simply K-Pop 어워드》 베스트 퍼포먼스</li>
                        <li>2016.01.14. 《하이원 서울가요대상》 본상</li>
                        <li>2016.02.17. 《가온 차트 K-POP 어워드》 K-POP월드한류스타상</li>
                        <li>2016.01.21. 《골든디스크》 음반 본상</li>
                        <li>2016.02.23. 《Soompi Awards 2015》 주목할만한 아티스트, 최고의 무대의상, 최고의 안무상</li>
                        <li>2016.10.27. 《대한민국 대중문화예술상》 문화체육관광부장관 표창</li>
                        <li>2016.11.16. 《아시아 아티스트 어워즈》 베스트 아이콘상, 베스트 아티스트상</li>
                        <li>2016.11.19. 《멜론 뮤직 어워드》 Top10, 올해의 앨범상 (화양연화 Young Forever)</li>
                        <li>2016.12.02. 《엠넷 아시안 뮤직 어워드》 베스트 댄스 퍼포먼스 남자 그룹, 올해의 가수상</li>
                        <li>2017.01.14. 《골든디스크》 음반 본상, 글로벌 K팝 아티스트상</li>
                        <li>2017.01.19. 《하이원 서울가요대상》 최고앨범상 (WINGS), 본상, 댄스 퍼포먼스상, 뮤직비디오상 (피 땀 눈물)</li>
                        <li>2017.02.22. 《가온 차트 K-POP 어워드》 올해의 가수상 (4분기 음반), V LIVE 글로벌 인기상</li>
                        <li>2017.05.22. 《Billboard Music Awards 2017》 Top Social Artist</li>
                        <li>2017.09.20. 《소리바다 베스트 케이뮤직 어워즈》 신한류아티스트상</li>
                        <li>2017.12.01. 《엠넷 아시안 뮤직 어워드》 베스트 뮤직비디오 (봄날), 베스트 아시안 스타일 인 홍콩, 올해의 아티스트</li>
                        <li>2017.12.02. 《멜론 뮤직 어워드》 멜론 Top10, 뮤직비디오상 (DNA), 글로벌 아티스트상, 핫트렌드 상(오늘 취하면), 올해의 노래 (봄날)</li>
                        <li>2017.00.00. 《2017 브랜드 대상》 가수 부문</li>
                        <li>2018.01.10. 《골든디스크》 음원부문 본상</li>
                        <li>2018.01.11. 《골든디스크》 음반부문 본상, 음반부문 대상</li>
                        <li>2018.01.25. 《하이원 서울가요대상》 본상, 대상</li>
                        <li>2018.02.14. 《가온 차트 뮤직 어워드》 올해의 가수상-오프라인 앨범 부문 1분기, 3분기</li>
                        <li>2018.02.28. 《한국대중음악상 시상식》 올해의 음악인</li>
                        <li>2018.03.11. 《아이하트 라디오 뮤직어워즈》 BEST BOY BAND, BEST FAN ARMY</li>
                        <li>2018.03.25. 《키즈 초이스 어워즈 2018》 글로벌 뮤직 스타</li>
                        <li>2018.04.10. 《인터파크 골든티켓 어워즈》 국내콘서트 뮤지션상</li>
                        <li>2018.04.16. 《Soompi Awards》 Artist of the Year, Album of the Year (YOU NEVER WALK ALONE), Song of the Year (DNA), Best Collaboration (MIC Drop Remix), Best Choreography (DNA), Fuse MV of the Year (봄날), Best Idol Actor (뷔-화랑)</li>
                        <li>2018.05.21. 《Billboard Music Awards》 Top Social Artist</li>
                        <li>2018.05.24. 《MTV Miaw 2018》 Fandom of The Year' & 'Kpop Explosion</li>
                        <li>2018.06.24. 《2018 Radio Disney Music Awards》 Best Duo/Group, Best Dance Track, Best Song That Makes You Smile, Fiercest Fans</li>
                        <li>2018.08.13. 《2018 Teen Choice Awards》 Choice International Artist, Choice Fandom</li>
                        <li>2018.08.27. 《한국방송대상》 가수상</li>
                        <li>2018.08.30. 《2018 소리바다 어워즈》 신한류 월드 소셜아티스트상, 본상, 대상</li>
                        <li>2018.10.09 《2018 American Music Awards》 Favorite Social Artist</li>
                        <li>2018.10.24. 《대한민국 대중문화예술상》 화관문화훈장</li>
                        <li>2018.11.05. 《MTV EMA》 BIGGEST FANS, BEST GROUP</li>
                        <li>2018.11.06. 《지니뮤직 어워드》 아이돌챔프 글로벌 인기상, 베스트 뮤직비디오상, 베스트 스타일상, 베스트 팬덤상, 댄스상 남자부문, 지니뮤직 인기상, 올해의 디지털 앨범상 (LOVE YOURSELF 結 Answer), 올해의 가수상</li>
                        <li>2018.11.12. 《People's Choice Awards》 Group of 2018, Song of 2018 (IDOL), The Music Video of 2018 (IDOL), Social Celebrity of 2018</li>
                        <li>2018.11.28. 《Asia Artist Awards》 한국관광공사 감사패, 인기상, AAA 페뷸러스, 올해의 아티스트, 대상</li>
                        <li>2018.12.01. 《멜론 뮤직 어워드》 TOP10, 랩/힙합 부문 (FAKE LOVE), 카카오핫스타상, 글로벌 아티스트, 네티즌 인기상, 올해의 앨범 (LOVE YOURSELF 轉 Tear), 올해의 아티스트</li>
                        <li>2018.12.12. 《엠넷 아시안 뮤직 어워드 in JAPAN》 페이보릿 뮤직비디오 (IDOL), 월드와이드 팬초이스 TOP10, 페이보릿 댄스 아티스트 남자, 올해의 월드와이드 아이콘</li>
                        <li>2018.12.14. 《엠넷 아시안 뮤직 어워드 in HongKong》 I SEOUL U 서울시 감사패, 엠웨이브 글로벌 초이스, 베스트 아시안 스타일, 베스트 뮤직비디오 (IDOL), 올해의 앨범 (LOVE YOURSELF 轉 Tear), 올해의 아티스트</li>
                        <li>2019.01.05. 《골든디스크》 2019 Global VLIVE Top 10 Best Artist 상, 음원부문 본상</li>
                        <li>2019.01.06. 《골든디스크》 U+ 아이돌 Live 인기상, 网易云音乐 골든디스크 인기상, 음반부문 본상, 음반부문 대상</li>
                        <li>2019.01.15. 《하이원 서울가요대상》 본상, 베스트 앨범상, 대상</li>
                        <li>2019.02.24. 《The Japan Golddisk Award 2019》 베스트 아시안 아티스트상, 올해의 앨범(Face Yourself), 아시아 베스트 앨범(Face Yourself, LY 'answer'), 베스트 MV(2017 BTS Live Trilogy 'THE WINGS TOUR' in JP, Kyocera Dome)</li>
                        <li>2019.02.26. 《V LIVE re:memVer party》 아티스트 Top 10, 베스트 V Origianl (Run BTS!), 베스트 비디오상(JK), 베스트 채널 with 10M+ 구독자 돌파</li>
                        <li>2019.02.26 《제6회 이데일리 문화대상》 이데일리 콘서트부문 최우수상, 이데일리 대상</li>
                        <li>2019.02.26. 《제16회 한국 대중 음악상》 최우수 팝 노래, 올해의 음악인상, 올해의 노래상</li>
                        <li>2019.04.24. 《U⁺5G 더팩트 뮤직 어워즈》 올해의 아티스트상</li>
                        <li>2019.05.02. 《Billboard Music Awards》 Top Social Artist, Top Duo/Group</li>
                        
                    </ul>
    
                   </div>
    
     </div>
                <Footer/>
            </React.Fragment>
            );
    }
}

export default MemberProfile;