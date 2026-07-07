import React from 'react';

const Surya = () => {
  const sunSalutationData = {
    steps: {
      step1: {
        content: 'Pranamasana (Prayer pose)',
        imageUrl: 'https://www.artofliving.org/in-en/app/uploads/2023/10/Surya-Namaskar-step-1.jpg',
        description: 'Stand at the edge of your mat, keep your feet together and balance your weight equally on both feet. Expand your chest and relax your shoulders. As you breathe in, lift both arms up from the sides, and as you exhale, bring your palms together in front of the chest in a prayer position.'
      },
      step2: {
        content: 'Hastauttanasana (Raised arms pose)',
        imageUrl: 'https://www.artofliving.org/in-en/app/uploads/2023/10/Surya-Namaskar-step-2.jpg',
        description: 'Breathing in, lift the arms up and back, keeping the biceps close to the ears. Stretch your whole body from the heels to the fingertips.'
      },
      step3: {
        content: 'Hastapadasana (Standing forward bend)',
        imageUrl: 'https://www.artofliving.org/in-en/app/uploads/2023/10/Surya-Namaskar-step-3.jpg',
        description: 'Breathing out, bend forward from the waist keeping the spine erect. Exhale completely, bringing the hands down to the floor beside the feet.'
      },
      step4: {
        content: 'Ashwa Sanchalanasana (Equestrian pose)',
        imageUrl: 'https://www.artofliving.org/in-en/app/uploads/2023/10/Surya-Namaskar-step-4.jpg',
        description: 'Breathing in, push your right leg back as far as possible. Bring the right knee to the floor and look up.'
      },
      step5: {
        content: 'Dandasana (Stick pose)',
        imageUrl: 'https://www.artofliving.org/in-en/app/uploads/2023/10/Surya-Namaskar-step-5.jpg',
        description: 'Inhale, take the left leg back and bring the whole body in a straight line.'
      },
      step6: {
        content: 'Ashtanga Namaskara (Salute with eight parts or points)',
        imageUrl: 'https://www.artofliving.org/in-en/app/uploads/2023/10/Surya-Namaskar-step-6.jpg',
        description: 'Gently bring your knees down, exhale. Slide forward, rest your chest and chin on the floor. Raise your posterior slightly.'
      },
      step7: {
        content: 'Bhujangasana (Cobra pose)',
        imageUrl: 'https://www.artofliving.org/in-en/app/uploads/2023/10/Surya-Namaskar-step-7.jpg',
        description: 'Slide forward, raise your chest into the Cobra pose. Keep your elbows bent and look up at the ceiling.'
      },
      step8: {
        content: 'Adho Mukha Svanasana (Downward facing dog pose)',
        imageUrl: 'https://www.artofliving.org/in-en/app/uploads/2023/10/Surya-Namaskar-step-8.jpg',
        description: 'Exhale, lift your hips and tailbone up to form an inverted “V” pose.'
      },
      step9: {
        content: 'Ashwa Sanchalanasana (Equestrian pose)',
        imageUrl: 'https://www.artofliving.org/in-en/app/uploads/2023/10/Surya-Namaskar-step-9.jpg',
        description: 'Inhale, bring the right foot forward between the hands. The left knee goes down. Press the hips down and look up.'
      },
      step10: {
        content: 'Hastapadasana (Standing forward bend)',
        imageUrl: 'https://www.artofliving.org/in-en/app/uploads/2023/10/Surya-Namaskar-step-10.jpg',
        description: 'Exhale, bring the left foot forward. Keep the palms on the floor. You may bend the knees if needed.'
      },
      step11: {
        content: 'Hastauttanasana (Raised arms pose)',
        imageUrl: 'https://www.artofliving.org/in-en/app/uploads/2023/10/Surya-Namaskar-step-11.jpg',
        description: 'Inhale, roll the spine up. Raise the hands up and bend backward slightly.'
      },
      step12: {
        content: 'Tadasana (Mountain Pose)',
        imageUrl: 'https://www.artofliving.org/in-en/app/uploads/2023/10/Surya-Namaskar-step-12.jpg',
        description: 'Exhale, straighten the body, bring the arms down, and relax. This completes one set of Surya Namaskar.'
      }
    }
  };

  return (
    <div style={{
      padding: '40px',
      background: 'transparent',
      minHeight: '100vh'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#333',
        fontSize: '36px',
        marginBottom: '40px',
        fontFamily: '"Comic Sans MS", cursive, sans-serif'
      }}>
        Sun Salutation (Surya Namaskar)
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px'
      }}>
        {Object.keys(sunSalutationData.steps).map((stepKey, index) => (
          <div key={stepKey} style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.2s',
            ':hover': {
              transform: 'scale(1.05)'
            }
          }}>
            <h3 style={{
              fontSize: '20px',
              color: '#555',
              marginBottom: '15px',
              fontFamily: '"Lucida Console", Monaco, monospace'
            }}>
              Step {index + 1}: {sunSalutationData.steps[stepKey].content}
            </h3>
            <img
              src={sunSalutationData.steps[stepKey].imageUrl}
              alt={stepKey}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                marginBottom: '15px',
                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
                ':hover': {
                  transform: 'scale(1.1)'
                }
              }}
            />
            <p style={{
              fontSize: '14px',
              color: '#666',
              lineHeight: '1.8',
              fontFamily: '"Arial", sans-serif'
            }}>
              {sunSalutationData.steps[stepKey].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Surya;