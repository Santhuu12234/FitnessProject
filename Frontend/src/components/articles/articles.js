import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Box, Image, Text, Link, Heading, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons'; // Import the back arrow icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './articles.css'; // Import the CSS file for bubble animations

const sportsPeople = [
    {
        name: "Michael Jordan",
        sport: "Basketball",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Michael_Jordan_in_2014.jpg/330px-Michael_Jordan_in_2014.jpg", // Replace with actual image URL
        url: "https://en.wikipedia.org/wiki/Michael_Jordan",
        description: "Michael Jordan, born on February 17, 1963, is a former professional basketball player and American businessman widely regarded as the greatest basketball player of all time. Over his 15-season NBA career, which spanned from 1984 to 2003, he won six championships with the Chicago Bulls and was instrumental in popularizing basketball globally during the 1980s and 1990s. Jordan's accolades include six NBA Finals MVP awards, ten scoring titles, and five regular-season MVP awards, making him a dominant force on the court. He is celebrated for his scoring ability, defensive prowess, and leaping skills, earning him the nicknames Air Jordan and His Airness. In addition to his NBA success, he played for the United States national team, securing four gold medals in major international competitions.",
      },
      {
        name: "Tom Brady",
        sport: "American Football",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Tom_Brady_2021.png/300px-Tom_Brady_2021.png",
        url: "https://en.wikipedia.org/wiki/Tom_Brady",
        description: "Thomas Edward Patrick Brady Jr. (born August 3, 1977) is a former professional football quarterback who played 23 seasons in the NFL, primarily with the New England Patriots and later the Tampa Bay Buccaneers. Widely regarded as the greatest quarterback of all time, Brady won seven Super Bowl championships, more than any player in history, and holds numerous NFL records, including most career passing yards, completions, and touchdown passes. Selected 199th overall in the 2000 NFL draft, Brady became the Patriots' starting quarterback in his second season, leading the team to three Super Bowl titles in a remarkable run that included 17 division titles and nine Super Bowl appearances, all NFL records.",
      },
     
      {
        name: "Usain Bolt",
        sport: "Track and Field (Sprinting)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Usain_Bolt_after_4_%C3%97_100_m_Rio_2016.jpg/330px-Usain_Bolt_after_4_%C3%97_100_m_Rio_2016.jpg", // Replace with actual image URL
        url: "https://en.wikipedia.org/wiki/Usain_Bolt",
        description: "Usain Bolt, born on August 21, 1986, is a retired Jamaican sprinter widely regarded as the greatest sprinter of all time. An eight-time Olympic gold medalist, he holds world records in the 100 meters (9.58 seconds), 200 meters (19.19 seconds), and the 4 × 100 meters relay (36.84 seconds). Bolt is the only athlete to win Olympic 100 m and 200 m titles at three consecutive Games (2008, 2012, and 2016) and is an eleven-time World Champion, achieving consecutive gold medals in the 100 m, 200 m, and 4 × 100 m relay from 2009 to 2015. His remarkable performances earned him the nickname Lightning Bolt and numerous accolades, including the IAAF World Athlete of the Year and BBC Overseas Sports Personality of the Year three times.",
      },
      {
        name: "Lionel Messi",
        sport: "Soccer",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/330px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg", // Replace with actual image URL
        url: "https://en.wikipedia.org/wiki/Lionel_Messi",
        description: "Lionel Messi, born on June 24, 1987, is an Argentine professional footballer who plays as a forward and captains Inter Miami in Major League Soccer and the Argentina national team. Widely regarded as one of the greatest players of all time, Messi has won a record eight Ballon d'Or awards and holds numerous records, including the most goals (672) for a single club, Barcelona, where he spent his entire career until 2021, winning 34 trophies. He has also won two Copa América titles and the 2022 FIFA World Cup with Argentina, where he scored seven goals, including two in the final, and was awarded the Golden Ball for best player. Renowned for his exceptional dribbling and playmaking abilities, Messi has scored over 800 career goals and is the all-time leading goalscorer for Argentina. ",
      },
      
      {
        name: "Roger Federer",
        sport: "Tennis",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Roger_Federer_2015_%28cropped%29.jpg/330px-Roger_Federer_2015_%28cropped%29.jpg", // Replace with actual image URL
        url: "https://en.wikipedia.org/wiki/Roger_Federer",
        description: "Roger Federer, born on August 8, 1981, is a Swiss former professional tennis player widely regarded as one of the greatest of all time. He held the world No. 1 ranking for 310 weeks, including a record 237 consecutive weeks, and finished as the year-end No. 1 five times. With 103 ATP singles titles, including 20 major championships—eight at Wimbledon and five at the US Open—Federer is one of the most decorated players in tennis history. He won his first major at Wimbledon in 2003 and completed a career Grand Slam in 2009. Notably, he led Switzerland to its first Davis Cup title in 2014 and won an Olympic silver medal in singles at the 2012 Games. After returning from knee surgery in 2017, he captured three more major titles, becoming the first man to win 20 majors at the 2018 Australian Open. Federer retired from professional tennis in September 2022 after the Laver Cup. ",
      },
      {
        name: "Cristiano Ronaldo",
        sport: "Soccer",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/330px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg", // Replace with actual image URL
        url: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo",
        description: "Cristiano Ronaldo, born on February 5, 1985, is a Portuguese professional footballer who currently plays as a forward and captains Al Nassr in the Saudi Pro League and the Portugal national team. Renowned as one of the greatest players of all time, he has won five Ballon d'Or awards, three UEFA Men's Player of the Year awards, and four European Golden Shoes, accumulating a remarkable 33 trophies throughout his career, including seven league titles, five UEFA Champions Leagues, the UEFA European Championship, and the UEFA Nations League. Ronaldo holds numerous records, including the most goals (140) and assists (42) in Champions League history and the highest number of international goals (130). ",
      },
      {
        name: "Rafael Nadal",
        sport: "Tennis",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Rafael_Nadal_en_2024_%28cropped%29.jpg/330px-Rafael_Nadal_en_2024_%28cropped%29.jpg", // Replace with actual image URL
        url: "https://en.wikipedia.org/wiki/Rafael_Nadal",
        description: "Rafael Nadal, born on June 3, 1986, is a Spanish professional tennis player renowned for his exceptional achievements in the sport. He has held the world No. 1 ranking for 209 weeks and has finished as the year-end No. 1 five times. With 22 Grand Slam titles, including a record 14 French Open titles, Nadal is one of the most successful players in tennis history, boasting 92 ATP singles titles overall, 36 of which are Masters titles. He completed the Career Golden Slam and is celebrated for his remarkable clay-court dominance, including an 81-match winning streak. Alongside Roger Federer and Novak Djokovic, he forms the Big Three in men's tennis. Nadal's career highlights include winning his first major at the 2005 French Open, Olympic gold in singles in 2008, and becoming the youngest player to achieve the Career Grand Slam in 2010. "
      },
      
      
      {
        name: "Tiger Woods",
        sport: "Golf",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tiger_Woods_in_May_2019.jpg/330px-Tiger_Woods_in_May_2019.jpg", // Replace with actual image URL
        url: "https://en.wikipedia.org/wiki/Tiger_Woods",
        description: "Eldrick Tont Tiger Woods, born on December 30, 1975, is an American professional golfer widely regarded as one of the greatest golfers of all time. He is tied for the most wins on the PGA Tour and ranks second in men's major championships, holding numerous golf records and is an inductee of the World Golf Hall of Fame. Turning professional in 1996 at age 20, Woods quickly rose to prominence, winning the Masters in 1997 by a record 12 strokes and reaching the world No. 1 ranking shortly thereafter. He dominated golf in the early 2000s, holding the top ranking for 264 consecutive weeks and winning 13 major championships. However, his career faced challenges due to personal issues and injuries, including a self-imposed hiatus from 2009 to 2010 following marital troubles, and four back surgeries from 2014 to 2017 that limited his competition.",
      },
      
      {
        name: "Wayne Gretzky",
        sport: "Ice Hockey",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Andrew_Scheer_with_Wayne_Gretzky_%2848055697168%29_%28cropped%29.jpg/330px-Andrew_Scheer_with_Wayne_Gretzky_%2848055697168%29_%28cropped%29.jpg", // Replace with actual image URL
        url: "https://en.wikipedia.org/wiki/Wayne_Gretzky",
        description: "Wayne Douglas Gretzky, born on January 26, 1961, is a Canadian former professional ice hockey player and coach, often hailed as the greatest hockey player of all time. Over his 20-season career in the NHL, from 1979 to 1999, he played for the Edmonton Oilers, Los Angeles Kings, St. Louis Blues, and New York Rangers, retiring at age 38. Nicknamed the Great One, Gretzky holds numerous NHL records, including the most career goals, assists, and points, and is the only player to score over 200 points in a single season, achieving this remarkable feat four times. His exceptional hockey intelligence, stamina, and anticipation allowed him to dominate the sport, earning him nine Hart Trophies, ten Art Ross Trophies, and two Conn Smythe Trophies, among others. After his retirement, he was immediately inducted into the Hockey Hall of Fame and had his jersey number 99 retired league-wide. ",
      },
      {
        name: "Michael Phelps",
        sport: "Swimming",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Michael_Phelps_Rio_Olympics_2016.jpg/330px-Michael_Phelps_Rio_Olympics_2016.jpg", // Replace with actual image URL
        url: "https://en.wikipedia.org/wiki/Michael_Phelps",
        description: "Michael Fred Phelps II, born on June 30, 1985, is an American former competitive swimmer and the most decorated Olympian of all time, with a total of 28 Olympic medals, including a record 23 golds. Phelps made history at the 2004 Athens Olympics by winning eight medals, matching the record for the most medals at a single Games, and then broke the record in 2008 by winning eight gold medals at the Beijing Olympics. He continued his success in subsequent Olympics, earning four golds and two silvers in London 2012 and five golds and one silver in Rio 2016, solidifying his status as the most successful athlete of four consecutive Olympics. Phelps also set multiple long course world records and won a total of 82 medals in major international competitions. After retiring in 2012, he briefly returned to swimming in 2014, competing in his fifth Olympics in 2016, where he carried the U.S.",
      },
      {
        name: "Pelé",
        sport: "Soccer",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Pele_con_brasil_%28cropped%29.jpg/330px-Pele_con_brasil_%28cropped%29.jpg",
        url: "https://en.wikipedia.org/wiki/Pelé",
        description: "Edson Arantes do Nascimento, commonly known as Pelé, was a Brazilian professional footballer born on October 23, 1940, and he passed away on December 29, 2022. Widely regarded as one of the greatest football players of all time, Pelé achieved extraordinary success during his career, including winning three FIFA World Cups in 1958, 1962, and 1970, making him the only player to achieve this feat. He began his professional career with Santos at age 15 and scored an incredible 1,279 goals in 1,363 games, a Guinness World Record. Pelé was also the top goalscorer for the Brazil national team for over fifty years, with 77 goals in 92 matches, and is Santos's all-time leading scorer with 643 goals in 659 games. Known as O Rei (The King), he popularized the term The Beautiful Game through his electrifying style of play and spectacular goals. "
      },
      {
        name: "Babe Ruth",
        sport: "Baseball",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Babe_Ruth2.jpg/384px-Babe_Ruth2.jpg",
        url: "https://en.wikipedia.org/wiki/Babe_Ruth",
        description: "George Herman Babe Ruth (February 6, 1895 – August 16, 1948) was an iconic American baseball player whose career in Major League Baseball (MLB) spanned 22 seasons from 1914 to 1935. Initially a star left-handed pitcher for the Boston Red Sox, Ruth achieved legendary status as a slugging outfielder for the New York Yankees, earning nicknames like the Bambino and the Sultan of Swat. He is often regarded as the greatest baseball player of all time and was one of the first five inductees into the Baseball Hall of Fame in 1936. After a successful pitching career, he transitioned to an everyday player, breaking the MLB single-season home run record with 29 in 1919 and later hitting 60 home runs in 1927, a record that remained unbroken for 34 years.",
      },
      {
        name: "Steffi Graf",
        sport: "Tennis",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Steffi_Graf_in_Hamburg_2010_%28cropped%29.jpg/330px-Steffi_Graf_in_Hamburg_2010_%28cropped%29.jpg",
        url: "https://en.wikipedia.org/wiki/Steffi_Graf",
        description: "Muhammad Ali, born Cassius Marcellus Clay Jr. on January 17, 1942, was an American professional boxer and activist celebrated as one of the most influential sports figures of the 20th century and the greatest heavyweight boxer ever. He began boxing at age 12 and won a gold medal in the light heavyweight division at the 1960 Summer Olympics before turning professional. At 22, he became the heavyweight champion by defeating Sonny Liston, shortly after changing his name to Muhammad Ali. His refusal to be drafted into the military during the Vietnam War due to his religious beliefs led to a conviction for draft evasion, which stripped him of his titles and sidelined him for nearly four years; this conviction was later overturned by the Supreme Court.",
      },
     
      {
        name: "Wayne Gretzky",
        sport: "Ice Hockey",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Andrew_Scheer_with_Wayne_Gretzky_%2848055697168%29_%28cropped%29.jpg/330px-Andrew_Scheer_with_Wayne_Gretzky_%2848055697168%29_%28cropped%29.jpg",
        url: "https://en.wikipedia.org/wiki/Wayne_Gretzky",
        description: "Wayne Gretzky, born January 26, 1961, is a Canadian former professional ice hockey player and coach, widely regarded as the greatest hockey player of all time. He played 20 seasons in the NHL from 1979 to 1999, primarily with the Edmonton Oilers, Los Angeles Kings, St. Louis Blues, and New York Rangers. Nicknamed the Great One, Gretzky holds numerous records, including the most career goals, assists, and points in NHL history, and is the only player to surpass 200 points in a single season four times. ",
      },
      {
        name: "Magic Johnson",
        sport: "Basketball",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Magic_Johnson_at_SXSW_2022_%2851958828669%29_%28cropped%29.jpg/330px-Magic_Johnson_at_SXSW_2022_%2851958828669%29_%28cropped%29.jpg",
        url: "https://en.wikipedia.org/wiki/Magic_Johnson",
        description:"Earvin Magic Johnson Jr. (born August 14, 1959) is a renowned American businessman and former professional basketball player, widely regarded as the greatest point guard of all time. Spending his entire NBA career with the Los Angeles Lakers, Johnson led the team to five championships during the Showtime era after being drafted first overall in 1979 following a national championship win with Michigan State. He retired abruptly in 1991 after announcing his HIV diagnosis but returned for the 1992 All-Star Game, earning the MVP award. Known for his exceptional court vision and passing ability, Johnson's career accolades include three NBA MVP Awards, three Finals MVPs, and twelve All-Star selections. ",
      },

     
      {
        name: "Serena Williams",
        sport: "Tennis",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Serena_Williams_at_2013_US_Open.jpg/300px-Serena_Williams_at_2013_US_Open.jpg", // Replace with actual image URL
        url: "https://en.wikipedia.org/wiki/Serena_Williams",
        description: "Serena Williams, born on September 26, 1981, is a retired American tennis player widely regarded as one of the greatest athletes in the sport's history. She held the world No. 1 ranking in singles for 319 weeks, including a joint-record 186 consecutive weeks, and finished as the year-end No. 1 five times. Williams won 23 Grand Slam singles titles, the most in the Open Era, and is the only player to achieve a Career Golden Slam in both singles and doubles. Turning professional in 1995, she quickly rose to prominence, capturing her first major title at the 1999 US Open and achieving a Serena Slam by winning four consecutive Grand Slam titles from 2002 to 2003 and again from 2014 to 2015.",
      },
     
      {
        name: "Muhammad Ali",
        sport: "Boxing",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/330px-Muhammad_Ali_NYWTS.jpg",
        url: "https://en.wikipedia.org/wiki/Muhammad_Ali",
        description: "Muhammad Ali (born Cassius Marcellus Clay Jr.; January 17, 1942 – June 3, 2016) was an American professional boxer and activist, widely regarded as one of the most significant sports figures of the 20th century and the greatest heavyweight boxer of all time. Born in Louisville, Kentucky, he began boxing at age 12, winning a gold medal in the light heavyweight division at the 1960 Summer Olympics before turning professional later that year. In 1964, at age 22, he shocked the world by defeating Sonny Liston to become the heavyweight champion, shortly after changing his name to Muhammad Ali. His refusal to be drafted into the military during the Vietnam War due to his religious beliefs led to his conviction for draft evasion, stripping him of his titles and keeping him out of the ring for nearly four years; his conviction was later overturned by the Supreme Court.",
      },
      {
        name: "LeBron James",
        sport: "Basketball",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/375px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg", // Replace with actual image URL
        url: "https://en.wikipedia.org/wiki/LeBron_James",
        description: "LeBron James, born on December 30, 1984, is an American professional basketball player for the Los Angeles Lakers in the NBA and is often regarded as one of the greatest players in basketball history, frequently compared to Michael Jordan. Nicknamed King James, he has competed in 10 NBA Finals, winning four championships and earning the inaugural NBA Cup in 2023. James holds the record as the all-time leading scorer in NBA history and ranks fourth in career assists, with numerous accolades including four MVP Awards, four Finals MVP Awards, and 20 All-Star selections. He gained national attention while playing for St. Vincent-St. Mary High School in Akron, Ohio, and was the first overall pick in the 2003 NBA Draft by the Cleveland Cavaliers. After leading the Cavaliers to their first NBA Finals in 2007 and winning two championships with the Miami Heat in 2012 and 2013, he returned to the Cavaliers to deliver a championship in 2016. ",
      },
     
      
      
];

const SportsLegends = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Box padding="4" backgroundColor="#f5f5f5" minHeight="100vh">
    <IconButton
        icon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        aria-label="Go back"
        mb="4"
        bg="black"
        color="white"
    />
    <Heading as="h1" textAlign="center" mb="8">
        Sports Legends
    </Heading>
    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
        {sportsPeople.map((person, index) => (
            <motion.div
                key={index}
                className="bubble-animation"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Box
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    bg="white"
                    p="4"
                    shadow="md"
                >
                    <Link href={person.url} isExternal>
                        <Image
                            src={person.image}
                            alt={person.name}
                            borderRadius="md"
                            mb="4"
                            objectFit="cover"
                        />
                        <Heading as="h3" size="lg" mb="2">
                            {person.name}
                        </Heading>
                        <Text fontSize="md" color="gray.600" mb="4">
                            {person.sport}
                        </Text>
                        <Text noOfLines={[6]}>{person.description}</Text>
                    </Link>
                </Box>
            </motion.div>
        ))}
    </Grid>
</Box>
);
};

export default SportsLegends;