import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Aasanas = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const optionsData = {
    neckPain: {
      content: "Downward-Facing Dog Pose",
      imageUrl:
        "https://cdn.yogajournal.com/wp-content/uploads/2021/11/Downward-Facing-Dog-Pose_Andrew-Clark_2400x1350.jpeg?crop=16:9&width=1500", // Replace with an actual image URL from Google
      procedure:
        "Come onto your hands and knees. Bring your hands slightly in front of your shoulders, pread your fingers wide, press down through your knuckles, and tuck your toes.Exhale as you lift your knees and reach your hips up and back. Keep your knees slightly bent as you press the backs of your thighs toward the wall behind you and reach your heels toward the mat.Press the base of your index fingers into the mat. Relax your neck and keep your head between your upper arms.Breathe here. As you exhale, bend your knees and lower yourself into Child’s PoseBeginner’s Tips",
      advantages: "Helps relieve neck tension and improves flexibility.",
      disadvantages:
        "May cause discomfort if performed too quickly or without proper alignment.",
      pageLink: "/neck-pain", // Replace with the actual path to the neck pain page
    },
    shoulderPain: {
      content: "Child pose",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AQTxtQJX2RE0pX0Nj9l-Vl3dZ5IGy1gyww&s", // Replace with an actual image URL from Google
      procedure:
        "The childs pose, also known as balasana, is a yoga pose that can help stretch your back and hip muscles, open your hips, and lengthen your spine:Start by sitting on a mat in thunderbolt pose (vajrasana).Align your buttocks with your heels, and keep your knees together or slightly apart.Inhale, lengthen your spine, and take a deep breath.Exhale, and lean forward while keeping your buttocks on your heels.Rest your forehead on the floor, and place your arms next to your legs with your palms facing upHold the pose for at least 10 breaths.Inhale slowly, and return to the starting position. ",
      advantages: "Improves shoulder mobility and relieves tension.",
      disadvantages: "May strain the shoulder if overstretched.",
      pageLink: "/shoulder-pain", // Replace with the actual path to the shoulder pain page
    },
    lowerBackPain: {
      content: "Cat Cow pose",
      imageUrl:
        "https://cdn.prod.website-files.com/65392ff2e726f445f21d0c5d/65743e8d2f80a56a06fcfefc_cat-cow.png", // Replace with an actual image URL from Google
      procedure:
        'Inhale deeply while curving your lower back and bringing your head up, tilting your pelvis up like a "cow." Exhale deeply and bring your abdomen in, arching your spine and bringing your head and pelvis down like a "cat." Repeat several times.',
      advantages: "Relieves lower back tension and gently stretches the spine.",
      disadvantages: "Could be uncomfortable if done too vigorously.",
      pageLink: "/lower-back-pain", // Replace with the actual path to the lower back pain page
    },
    // Add more options with appropriate images, procedures, advantages, disadvantages, and page links
    upperBackPain: {
      content: "Lotus pose",
      imageUrl:
        "https://www.ekhartyoga.com/media/images/articles/content/Lotus-pose-Padmasana.jpg", // Replace with actual image URL
      procedure:
        "From a seated cross-legged position, ground the hips. Inhale and lengthen through the spine. As you exhale, bring the right leg as far out to the right as possible, close the knee by bringing thigh and calf together. Flex your foot and bring the outside of the right foot to rest in the inner left groin as you inhale.",
      advantages:
        "Helps in stretching the upper back, improving posture, and relieving tension in the shoulders and neck.",
      disadvantages:
        "May cause strain if performed with excessive force or if you have existing shoulder issues.",
    },
    kneePain: {
      content: "Big toe pose",
      imageUrl:
        "data:image/jpeg;base64,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", // Replace with actual image URL
      procedure:
        "Padangusthasana (big-toe pose) is a standing yoga posture of Ashtanga yoga; the name comes from the Sanskrit words “pada”, meaning foot and “angustha”, meaning big-toe and “asana”, referring to yoga or posture. In English, this yogasanas translates to the big toe pose.",
      advantages:
        "Stretches the knee joint and surrounding muscles, improving flexibility and reducing stiffness.",
      disadvantages:
        "May cause discomfort if you have severe knee pain or existing knee injuries.",
    },
    anklePain: {
      content: "Triangle pose",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTuKkFW4HkUFM0g8DH1lveqMx7TMeL6sOSjU2N393YEE4fclY8f74wUOKO-AqUVbADG8&usqp=CAU", // Replace with actual image URL
      procedure:
        "Sit with your legs extended in front of you. Flex your right foot, pointing your toes towards the ceiling, and gently rotate your ankle in circular motions. Do 10 circles in each direction, then switch to the left ankle. Afterward, point and flex your toes back and forth 10 times. Finish with a gentle ankle massage using your hands.",
      advantages:
        "Enhances ankle mobility, reduces stiffness, and improves circulation in the feet and lower legs.",
      disadvantages:
        "May cause discomfort if performed too quickly or if you have severe ankle pain.",
    },
    hipPain: {
      content: "Half lord of fishes pose",
      imageUrl:
        "data:image/jpeg;base64,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", // Replace with actual image URL
      procedure:
        "Start in a seated position with your legs extended. Bend your right knee and place your right foot on the outside of your left thigh. Use your left elbow to gently press against the outside of your right knee, while twisting your torso to the right. Hold this pose for 30 seconds, focusing on breathing deeply. Then switch to the other side. This pose stretches the hip muscles and improves flexibility.",
      advantages:
        "Opens the hips, relieves tension, and improves mobility in the hip joint.",
      disadvantages:
        "Should be avoided if you have severe hip pain or a hip injury, as it might aggravate the condition.",
    },

    wristPain: {
      content: "Wrist turn",
      imageUrl:
        "https://tse1.mm.bing.net/th?id=OIP.TYDPH77mIL18d3ecjXpLKwHaEK&pid=Api&P=0&h=180", // Replace with actual image URL
      procedure:
        "bend the elbow at a right angle extend the hand outwards, palm facing up twist the wrist around gradually, until the palm is facing down hold the position for 5 seconds repeat nine more times do two more sets of 10 repetitions",
      advantages:
        "Alleviates wrist pain and tension, increases flexibility, and strengthens the wrist joints.",
      disadvantages:
        "Avoid overextending or forcing the stretch, especially if you have carpal tunnel syndrome or similar conditions.",
    },

    elbowPain: {
      content: "Isometric elbow flexion",
      imageUrl:
        "https://physical-therapy.us/wp-content/uploads/2024/03/isometric-elbow-flextion-150x150.webp", // Replace with actual image URL
      procedure:
        "Use a chair and table for the isometric elbow flexion exercise.You must sit up straight in a chair and place your hands palm-side up under the table to perform this exercise.As if you were attempting to lift the table, raise your hands straight up.Hold this position for a few seconds.Put as much pressure on the area as you can without hurting it.Then return to your neutral position.Then relax.Repeat this exercise 5-10 times.Repeat the exercise with the other hand.",
      advantages:
        "Reduces strain in the elbow and forearm, improving flexibility and reducing stiffness.",
      disadvantages:
        "Avoid overstretching, especially if you have tennis elbow or other elbow-related injuries.",
    },

    footPain: {
      content: "Toe extension",
      imageUrl:
        "https://tse2.mm.bing.net/th?id=OIP.1P9e0fPDn6mBdgQAqkN9VgHaHa&pid=Api&P=0&h=180", // Replace with actual image URL
      procedure:
        "Sit up straight in a chair, with the feet flat on the floor.Place the left foot on the right thigh.Pull the toes up toward the ankle. There should be a stretching feeling along the bottom of the foot and heel cord.Hold for 10 seconds. Massaging the arch of the foot while stretching will help ease tension and pain.Repeat this exercise 10 times on each foot.",
      advantages:
        "Eases foot pain, improves flexibility in the toes and ankles, and promotes better circulation.",
      disadvantages:
        "Avoid applying too much pressure during the massage if you have sensitive feet or a foot injury.",
    },

    calfPain: {
      content: "standing calf raise exercise",
      imageUrl:
        "https://tse2.mm.bing.net/th?id=OIP.7_zyFvOScSe03UC3LlbbPQAAAA&pid=Api&P=0&h=180", // Replace with actual image URL
      procedure:
        ".Stand on an exercise or yoga mat with your feet shoulder-width apart, toes pointing forward.Keep your back straight, shoulders back and down, and abs pulled in.Raise your heels slowly, keeping your knees extended (but not locked).Pause for one second when youre standing as much on the tips of your toes as you can.Lower your heels back to the ground, returning to the starting position.",
      advantages:
        "Stretches the calf muscles, reducing tightness and improving flexibility.",
      disadvantages:
        "May cause discomfort if overstretched or if you have existing calf injuries.",
    },

    hamstringPain: {
      content: "Mini squards",
      imageUrl:
        "https://tse4.mm.bing.net/th?id=OIP.KXTylxk6AOMgVErAIRuVDwHaFJ&pid=Api&P=0&h=180", // Replace with actual image URL
      procedure:
        "Stand tall on one leg with the other leg in front. Squat down keeping the forward leg in the air. Push back up to the starting position. About the mini squat exercise . Benefits of the mini squat exercise Here are some potential benefits of performing this exercise: Improves overall balance and stability. Develops core strength and stability.mini squards",
      advantages:
        "Stretches and loosens tight hamstrings, improving overall leg flexibility.",
      disadvantages:
        "Avoid overstretching, as it may cause strain or injury to the hamstrings.",
    },

    quadPain: {
      content: "Short Arc Quad Exercise",
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.gNl7T2nVzlIPNBxT3VUtYgHaEK&pid=Api&P=0&h=180", // Replace with actual image URL
      procedure:
        "Lie on your back with your knees out straight.Place a bolster under the knee of the quad you wish to strengthen. You can use household items like a coffee can or basketball as a bolster.Slowly straighten your knee until your leg is fully straightened. Maintain contact with the bolster at all times during the exercise.Tighten your quad muscle as your knee straightens. You should try to straighten your knee out all the way.Hold the straight knee position for three to five seconds, and then slowly return to the starting position.",
      advantages:
        "Relieves tightness in the quadriceps, improving mobility and reducing muscle soreness.",
      disadvantages:
        "Avoid pulling too hard on the ankle, as it may cause knee or hip discomfort.",
    },

    groinPain: {
      content: "deadlift",
      imageUrl:
        "https://tse2.mm.bing.net/th?id=OIP.UhjegFXFKAUZaF67fxMIPQHaHQ&pid=Api&P=0&h=180", // Replace with actual image URL
      procedure:
        "Set your feet about hip-width apart, and then root them to the floor by twisting them slightly apart. Maintain a relatively vertical shin angle, bring your shoulders over the bar, then hinge your hips backward by driving your butt behind you.Drive through the floor with the legs, keeping the bar against the body, to lift the weight off the floor. The barbell should very lightly graze your shins. As the barbell passes your knee, explosively thrust your hips forward to lock the bar out. Hold at the top for a beat before letting the weight down.",
      advantages:
        "Stretches the inner thighs and groin muscles, reducing tension and improving flexibility.",
      disadvantages:
        "Be cautious not to overstretch, as this can lead to groin strains or discomfort.",
    },

    chestPain: {
      content: "Chest Pain Relief - Yoga Pose",
      imageUrl:
        "https://tse4.mm.bing.net/th?id=OIP.pv5hFLicvygsSFdyImzt6wAAAA&pid=Api&P=0&h=180", // Replace with actual image URL
      procedure:
        "Draw your shoulder blades back behind you to keep from pressing with rounded shoulders.Grasp the barbell using an overhand grip, placing your thumbs on the outside of your closed fist. Your arms are slightly wider than shoulder-width apart and the angle of your upper arms is about 45 degrees to the body.Remove the barbell from the rack, locking your elbows. (Donot move the bar in an arc from the rack directly to the chest position.)Inhale while lowering the bar to your chest, at the nipple line.Exhale as you press the bar above your chest, extending your arms. Donot watch the bar—focus on the ceiling.Lower the bar so it is just above your chest. This is the starting position for the next bench press.",
      advantages:
        "Opens the chest, improves posture, and reduces tension in the chest muscles.",
      disadvantages:
        "Avoid if you have a shoulder injury, as this stretch may cause discomfort.",
    },

    ribPain: {
      content: "Cobra pose",
      imageUrl:
        "data:image/jpeg;base64,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", // Replace with actual image URL
      procedure:
        "Lie down in a prone position. Lie face down on your mat with your entire body extended. ...Bring your hands underneath the shoulder blades. ...Begin to lift your upper body. ...Use lower back muscles to lift higher. ...Look slightly forward and up. ...Lower down gently. ...Transition to the next posture.",
      advantages:
        "Stretches the ribcage and intercostal muscles, improving flexibility and reducing discomfort.",
      disadvantages:
        "Avoid bending too far, as overstretching can strain the ribs or back muscles.",
    },

    shoulderBladePain: {
      content: "Thread the Needle Pose",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtSHmGWCmLhEqL1kd06Rws_KpMLBUutZUj6Fn6uMWug&s", // Replace with actual image URL
      procedure:
        "Lift one hand off the floor and reach it underneath your stomach to your opposite side, as you let your shoulder lower toward the floor. Allow your chest and head to rotate as you do this gentle twist. Twist as far as is comfortable, and hold the stretch. Slowly return to the starting position.",
      advantages:
        "Eases tension in the upper back and shoulder blades, improves flexibility, and promotes relaxation.",
      disadvantages:
        "Should be performed gently to avoid straining the back or neck muscles.",
    },

    neckStiffness: {
      content: "Gomukhasana",
      imageUrl:
        "data:image/jpeg;base64,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", // Replace with actual image URL
      procedure:
        "Stretch the left arm up, fingertips pointing towards the ceiling, the palm of your hand still facing forward. Bend the elbow and reach down for the right fingertips, hooking the fingers together if they reach. Firm your shoulder blades against your back ribs and open your chest. Stay for a few breaths.",
      advantages:
        "Relieves stiffness in the neck, improves flexibility, and reduces muscle tension.",
      disadvantages:
        "Avoid applying too much pressure or moving too quickly, as it may cause strain.",
    },

    shinPain: {
      content: "Shin muscle stretch",
      imageUrl:
        "data:image/jpeg;base64,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", // Replace with actual image URL
      procedure:
        "Sit in a chair, with both feet flat on the floor.Bend your affected leg under the chair so that the top of your foot near your toes is flat on the floor and your toes are pointed behind you, away from your body. ...Hold this stretch for 15 to 30 seconds, and then relax.Repeat 2 to 4 times.",
      advantages:
        "Stretches the shin muscles, reduces tightness, and improves flexibility in the lower legs.",
      disadvantages:
        "Avoid overstretching, especially if you have shin splints or other shin-related injuries.",
    },

    toePain: {
      content: "Plantar fascia stretch",
      imageUrl:
        "https://www.versusarthritis.org/media/23285/plantar-fascia-stretch-500x310.jpg", // Replace with actual image URL
      procedure:
        "Sit down and rest the arch of your foot on a round object, such as a tin of beans. Roll your foot on the tin in all directions for a few minutes. Repeat this exercise twice a day.",
      advantages:
        "Eases tension in the toes, improves flexibility, and promotes circulation in the feet.",
      disadvantages:
        "Avoid overstretching, especially if you have bunions or other toe-related issues.",
    },
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNavigate = () => {
    if (selectedOption && optionsData[selectedOption]) {
      navigate(optionsData[selectedOption].pageLink);
    }
  };

  const selectedOptionData = optionsData[selectedOption];

  return (
    
    <div
    
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "transparent-light",
      }}
    >
      <div
        style={{
          width: "60%",
          padding: "40px",
          borderRadius: "20px",
          backgroundColor: "blackAlpha",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
        }}
      >
     <header
        style={{
          width: "100%",
          padding: "20px",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          borderRadius: " 20px 20px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ fontSize: "36px", margin: "0", fontFamily: "Arial, sans-serif", fontWeight: "700" }}>
          YOGA AASANAS
        </h1>
      </header>
      <br></br>
        <select
          value={selectedOption}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            marginBottom: "30px",
            border: "2px solid black",
            outline: "none",
            fontSize: "18px",
            color: "white",
            backgroundColor: "black",
            transition: "border-color 0.3s ease",
          }}
        >
          <option value="">Select a body pain area</option>
          <option value="neckPain">Neck Pain</option>
          <option value="shoulderPain">Shoulder Pain</option>
          <option value="lowerBackPain">Lower Back Pain</option>
          <option value="upperBackPain">Upper Back Pain</option>
          <option value="kneePain">Knee Pain</option>
          <option value="anklePain">Ankle Pain</option>
          <option value="hipPain">Hip Pain</option>
          <option value="wristPain">Wrist Pain</option>
          <option value="elbowPain">Elbow Pain</option>
          <option value="footPain">Foot Pain</option>
          <option value="calfPain">Calf Pain</option>
          <option value="hamstringPain">Hamstring Pain</option>
          <option value="quadPain">Quad Pain</option>
          <option value="groinPain">Groin Pain</option>
          <option value="chestPain">Chest Pain</option>
          <option value="ribPain">Rib Pain</option>
          <option value="shoulderBladePain">Shoulder Blade Pain</option>
          <option value="neckStiffness">Neck Stiffness</option>
          <option value="shinPain">Shin Pain</option>
          <option value="toePain">Toe Pain</option>
          {/* Add more options as needed */}
        </select>

        {selectedOptionData && (
          <div>
            <h2
              style={{
                fontSize: "28px",
                color: "black",
                fontFamily: "Arial, sans-serif",
                fontWeight: "600",
                marginBottom: "20px",
                textShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              {selectedOptionData.content}
            </h2>
            <center>
              <img
                src={selectedOptionData.imageUrl}
                alt={selectedOption}
                style={{
                  width: "90%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "20px",
                  marginBottom: "20px",
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
                  transition: "transform 0.3s ease",
                }}
              />
            </center>
            <p style={{ fontSize: "18px", color: "#333", lineHeight: "1.8" }}>
              {selectedOptionData.procedure}
            </p>
            <div style={{ marginTop: "30px", textAlign: "left" }}>
              <h3
                style={{
                  fontSize: "22px",
                  color: "black",
                  fontWeight: "600",
                }}
              >
                Advantages:
              </h3>
              <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.8" }}>
                {selectedOptionData.advantages}
              </p>
              <h3
                style={{
                  fontSize: "22px",
                  color: "black",
                  fontWeight: "600",
                  marginTop: "20px",
                }}
              >
                Disadvantages:
              </h3>
              <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.8" }}>
                {selectedOptionData.disadvantages}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Aasanas;