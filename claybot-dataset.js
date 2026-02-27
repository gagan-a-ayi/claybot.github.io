// ClayBot Dataset — claybot-dataset.js
const CONSULT_LEVEL = {
  label: "consult",
  icon: "🏥",
  title: "Time to Reach Out to a Professional",
  text: `
<h2>🏥 consult: Time to Reach Out to a Professional</h2>
<p>If your anxiety feels persistent, overwhelming, or is interfering with daily functioning, it may be time to consider professional support. Anxiety disorders are highly treatable with structured care.</p>

<h3>Signs Professional Support May Help</h3>
<ul>
<li><strong>Excessive worry</strong> most days for several months</li>
<li>Frequent panic attacks</li>
<li>Avoiding important situations due to fear</li>
<li>Sleep disturbance or physical symptoms like chest tightness</li>
<li>Feeling out of control of your thoughts</li>
</ul>

<h3>Common Evidence-Based Treatments</h3>
<ul>
<li><strong>Cognitive Behavioral Therapy (CBT)</strong> for restructuring anxious thoughts</li>
<li><strong>Exposure Therapy</strong> for avoidance-based anxiety</li>
<li><strong>Acceptance and Commitment Therapy (ACT)</strong></li>
<li><strong>Medication options</strong> such as SSRIs or SNRIs when appropriate</li>
</ul>

<p>If you ever feel unsafe or unable to cope, seek immediate medical assistance through local emergency services.</p>

<blockquote>Anxiety is treatable. You do not have to manage it alone.</blockquote>
`,
  sources: ["apa.org", "who.int"]
};

const DATASET = {
  anxiety: {
    label: "anxiety",
    subtypes: {
      social: {
        label: "Social anxiety",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Calm Before Interaction",
            text: `
<h2>🌱 basic: Calm Before Interaction</h2>
<p>Social anxiety activates fear of judgment. Your body reacts as if evaluation equals danger.</p>

<h3>Immediate Tools</h3>
<ul>
<li><strong>Slow breathing</strong> before entering social spaces.</li>
<li>Prepare one simple opening question.</li>
<li>Shift focus outward: notice details in the room.</li>
</ul>

<p>Attention redirection reduces self-focused rumination, which maintains anxiety.</p>

<blockquote>Connection begins when attention moves outward.</blockquote>
`,
            qr: ["I fear embarrassment", "People judge me", "Avoiding events", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Thought Restructuring",
            text: `
<h2>🌿 intermediate: Thought Restructuring</h2>
<p>Social anxiety often involves mind-reading distortions.</p>

<ul>
<li>Write the feared thought: <em>“They think I’m awkward.”</em></li>
<li>Ask: <strong>What evidence supports this?</strong></li>
<li>Generate a balanced alternative thought.</li>
</ul>

<h3>Behavioral Experiment</h3>
<ul>
<li>Speak once in a small group.</li>
<li>Observe actual outcomes.</li>
</ul>

<blockquote>Predictions feel certain. Evidence tests them.</blockquote>
`,
            qr: ["Still afraid", "I avoid speaking", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Exposure & Safety Behaviors",
            text: `
<h2>🔥 advanced: Exposure & Safety Behaviors</h2>
<p>Avoidance reinforces fear. Gradual exposure retrains the brain.</p>

<ul>
<li>Create a fear hierarchy from least to most intimidating.</li>
<li>Practice without safety behaviors like excessive rehearsal.</li>
<li>Stay in the situation until anxiety decreases naturally.</li>
</ul>

<p>Neuroscience shows repeated safe exposure reduces amygdala reactivity.</p>

<blockquote>Courage grows through repetition, not avoidance.</blockquote>
`,
            qr: ["This feels intense", "Anxiety spikes", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Social Anxiety Disorder",
            text: `
<h2>💎 pro: Social Anxiety Disorder</h2>
<p>If fear is persistent for six months or more and causes significant avoidance, it may meet criteria for social anxiety disorder.</p>

<ul>
<li>Structured CBT with exposure</li>
<li>Group therapy for real-time practice</li>
<li>Medication evaluation if needed</li>
</ul>

<p>If anxiety causes panic or severe impairment, professional care is strongly recommended.</p>

<blockquote>With structured support, confidence can be rebuilt.</blockquote>
`,
            qr: ["I need professional help", "Show options"]
          }
        ]
      },

      performance: {
        label: "Performance anxiety",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Pre-Performance Reset",
            text: `
<h2>🌱 basic: Pre-Performance Reset</h2>
<p>Performance anxiety is anticipatory fear of evaluation.</p>

<ul>
<li>Slow breathing before the event.</li>
<li>Reframe adrenaline as energy.</li>
<li>Visualize a successful first minute.</li>
</ul>

<blockquote>Adrenaline can be fuel, not threat.</blockquote>
`,
            qr: ["Stage fright", "Exam fear", "Heart races", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Cognitive Reframing",
            text: `
<h2>🌿 intermediate: Cognitive Reframing</h2>
<p>Identify perfectionistic beliefs.</p>

<ul>
<li>Replace “I must be flawless” with “I aim to do well.”</li>
<li>Practice under mild stress conditions.</li>
</ul>

<blockquote>Progress beats perfection.</blockquote>
`,
            qr: ["Still anxious", "Fear of failure", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Exposure Conditioning",
            text: `
<h2>🔥 advanced: Exposure Conditioning</h2>
<p>Repeated simulated exposure reduces anticipatory anxiety.</p>

<ul>
<li>Practice in increasing audience sizes.</li>
<li>Record and review objectively.</li>
</ul>

<blockquote>Repetition rewires response.</blockquote>
`,
            qr: ["Feels overwhelming", "Avoiding events", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Clinical Evaluation",
            text: `
<h2>💎 pro: Clinical Evaluation</h2>
<p>Severe performance anxiety may overlap with panic disorder or generalized anxiety disorder.</p>

<ul>
<li>CBT with exposure protocols</li>
<li>Medication consultation</li>
<li>Skills-based coaching therapy</li>
</ul>

<p>Professional support can reduce anticipatory dread significantly.</p>

<blockquote>Treatment transforms fear into skill.</blockquote>
`,
            qr: ["I need professional help", "Guide me"]
          }
        ]
      },

      health: {
        label: "Health anxiety",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Interrupt Reassurance Loop",
            text: `
<h2>🌱 basic: Interrupt Reassurance Loop</h2>
<p>Health anxiety often involves repeated checking.</p>

<ul>
<li>Delay symptom checking by 10 minutes.</li>
<li>Limit internet searching.</li>
<li>Ground with slow breathing.</li>
</ul>

<blockquote>Certainty seeking fuels anxiety.</blockquote>
`,
            qr: ["I google symptoms", "Fear illness", "Constant worry", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Probability Thinking",
            text: `
<h2>🌿 intermediate: Probability Thinking</h2>
<p>Challenge catastrophic interpretations.</p>

<ul>
<li>Estimate realistic likelihood.</li>
<li>Generate benign explanations.</li>
</ul>

<blockquote>Possible does not mean probable.</blockquote>
`,
            qr: ["Still worried", "Body sensations scare me", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Exposure to Uncertainty",
            text: `
<h2>🔥 advanced: Exposure to Uncertainty</h2>
<p>Accepting uncertainty reduces compulsive reassurance.</p>

<ul>
<li>Practice tolerating “I don’t know.”</li>
<li>Avoid repeated medical testing without cause.</li>
</ul>

<blockquote>Uncertainty is uncomfortable, not unsafe.</blockquote>
`,
            qr: ["Feels intolerable", "Anxiety persists", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Illness Anxiety Disorder",
            text: `
<h2>💎 pro: Illness Anxiety Disorder</h2>
<p>Persistent preoccupation with illness despite reassurance may require structured therapy.</p>

<ul>
<li>CBT targeting reassurance seeking</li>
<li>Medication for co-occurring anxiety</li>
</ul>

<p>Professional assessment helps differentiate medical vs anxiety-driven concerns.</p>

<blockquote>Support restores perspective and calm.</blockquote>
`,
            qr: ["I need professional help", "What next"]
          }
        ]
      },

      general: {
        label: "General anxiety / I'm not sure",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Grounding",
            text: `
<h2>🌱 basic: Grounding</h2>
<p>General anxiety feels like constant unease.</p>

<ul>
<li>4-6 breathing</li>
<li>Reduce caffeine</li>
<li>Short physical movement</li>
</ul>

<blockquote>Calm begins in the body.</blockquote>
`,
            qr: ["Still anxious", "Restless mind", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Worry Scheduling",
            text: `
<h2>🌿 intermediate: Worry Scheduling</h2>
<p>Designate 15 minutes daily for worry.</p>

<ul>
<li>Postpone worries until that time.</li>
<li>Write them down.</li>
</ul>

<blockquote>Structure limits rumination.</blockquote>
`,
            qr: ["It’s constant", "Hard to control", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Generalized Anxiety Patterns",
            text: `
<h2>🔥 advanced: Generalized Anxiety Patterns</h2>
<p>Chronic worry may reflect GAD patterns.</p>

<ul>
<li>Challenge intolerance of uncertainty.</li>
<li>Practice acceptance-based techniques.</li>
</ul>

<blockquote>Uncertainty can be lived with.</blockquote>
`,
            qr: ["Feels chronic", "Exhausting", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Clinical Support for Anxiety",
            text: `
<h2>💎 pro: Clinical Support for Anxiety</h2>
<p>When anxiety interferes with work, relationships, or sleep, professional treatment is recommended.</p>

<ul>
<li>CBT</li>
<li>ACT</li>
<li>Medication consultation</li>
</ul>

<p>If you feel unsafe, seek immediate medical care.</p>

<blockquote>Anxiety is treatable with structured care.</blockquote>
`,
            qr: ["I need professional help", "Show resources"]
          }
        ]
      }
    },
    subQR: ["Social anxiety", "Performance anxiety", "Health anxiety", "General anxiety / I'm not sure"]
  },

  sadness: {
    label: "sadness",
    subtypes: {
      grief: {
        label: "Grief / Loss",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Allow the Wave",
            text: `
<h2>🌱 basic: Allow the Wave</h2>
<p>Grief is a natural response to loss. It may feel unpredictable, rising in waves.</p>

<h3>Immediate Support</h3>
<ul>
<li>Name the loss clearly.</li>
<li>Allow tears without judgment.</li>
<li>Focus on one grounding ritual such as lighting a candle or quiet reflection.</li>
</ul>

<p>Suppressing grief often prolongs distress. Gentle acknowledgment reduces emotional resistance.</p>

<blockquote>Grief reflects love that still exists.</blockquote>
`,
            qr: ["It hurts deeply", "I can’t stop crying", "Feels unbearable", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Processing the Loss",
            text: `
<h2>🌿 intermediate: Processing the Loss</h2>
<p>Grief often includes sadness, anger, guilt, and disbelief.</p>

<ul>
<li>Write a letter expressing unfinished thoughts.</li>
<li>Share memories with someone safe.</li>
<li>Maintain basic routines for stability.</li>
</ul>

<p>Grief research shows oscillating between loss-focused and restoration-focused activities supports healing.</p>

<blockquote>Healing moves between remembering and rebuilding.</blockquote>
`,
            qr: ["I feel stuck", "Guilt persists", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Complicated Grief Patterns",
            text: `
<h2>🔥 advanced: Complicated Grief Patterns</h2>
<p>If grief remains intense and unchanged for months, it may reflect prolonged grief disorder.</p>

<ul>
<li>Notice persistent avoidance of reminders.</li>
<li>Address self-blame through cognitive restructuring.</li>
<li>Gradual exposure to avoided memories.</li>
</ul>

<p>Structured therapy can help integrate the loss into ongoing life.</p>

<blockquote>Integration does not erase love.</blockquote>
`,
            qr: ["Still overwhelmed", "Months have passed", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: When Grief Requires Clinical Care",
            text: `
<h2>💎 pro: When Grief Requires Clinical Care</h2>
<p>Persistent despair, inability to function, or thoughts of self-harm require immediate professional attention.</p>

<ul>
<li>Grief-focused therapy</li>
<li>CBT for depressive symptoms</li>
<li>Medication evaluation if major depression develops</li>
</ul>

<p>If you feel unsafe or have thoughts of harming yourself, seek urgent medical care immediately.</p>

<blockquote>Intense grief deserves structured support.</blockquote>
`,
            qr: ["I need professional help", "I feel unsafe"]
          }
        ]
      },

      loneliness: {
        label: "Loneliness",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Gentle Connection",
            text: `
<h2>🌱 basic: Gentle Connection</h2>
<p>Loneliness signals unmet social needs.</p>

<ul>
<li>Send one simple message to someone.</li>
<li>Step into a shared space briefly.</li>
<li>Acknowledge the feeling without shame.</li>
</ul>

<blockquote>Connection often begins with a small reach.</blockquote>
`,
            qr: ["I feel isolated", "No one understands", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Building Social Habits",
            text: `
<h2>🌿 intermediate: Building Social Habits</h2>
<p>Regular contact builds belonging.</p>

<ul>
<li>Schedule one weekly interaction.</li>
<li>Join interest-based groups.</li>
<li>Practice active listening.</li>
</ul>

<blockquote>Belonging grows through repetition.</blockquote>
`,
            qr: ["Still lonely", "Hard to connect", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Core Beliefs",
            text: `
<h2>🔥 advanced: Core Beliefs</h2>
<p>Loneliness may involve beliefs like <strong>“I am unworthy.”</strong></p>

<ul>
<li>Challenge global self-judgments.</li>
<li>Practice vulnerability in safe spaces.</li>
</ul>

<blockquote>Self-worth strengthens connection.</blockquote>
`,
            qr: ["Feels deep-rooted", "I withdraw often", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Depression & Isolation",
            text: `
<h2>💎 pro: Depression & Isolation</h2>
<p>Persistent loneliness with low energy and hopelessness may indicate depression.</p>

<ul>
<li>Structured therapy</li>
<li>Behavioral activation treatment</li>
<li>Medication consultation if needed</li>
</ul>

<p>If you feel unsafe, seek immediate medical assistance.</p>

<blockquote>Isolation can be reversed with support.</blockquote>
`,
            qr: ["I need professional help", "I feel unsafe"]
          }
        ]
      },

      breakup: {
        label: "Heartbreak / Breakup",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Emotional Stabilization",
            text: `
<h2>🌱 basic: Emotional Stabilization</h2>
<p>Breakups activate attachment pain similar to withdrawal.</p>

<ul>
<li>Limit contact temporarily.</li>
<li>Remove triggers from immediate view.</li>
<li>Lean on trusted support.</li>
</ul>

<blockquote>Pain reflects attachment, not weakness.</blockquote>
`,
            qr: ["I miss them", "Feels unbearable", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Cognitive Balance",
            text: `
<h2>🌿 intermediate: Cognitive Balance</h2>
<p>Avoid idealizing the relationship.</p>

<ul>
<li>List both strengths and challenges.</li>
<li>Reframe rejection as incompatibility.</li>
</ul>

<blockquote>Clarity reduces romantic distortion.</blockquote>
`,
            qr: ["Still stuck", "Obsessive thoughts", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Attachment Repair",
            text: `
<h2>🔥 advanced: Attachment Repair</h2>
<p>Breakups may activate early attachment wounds.</p>

<ul>
<li>Identify attachment style.</li>
<li>Build self-soothing capacity.</li>
</ul>

<blockquote>Attachment can be rebuilt internally.</blockquote>
`,
            qr: ["Feels traumatic", "I can’t move on", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Major Depressive Reaction",
            text: `
<h2>💎 pro: Major Depressive Reaction</h2>
<p>If heartbreak leads to persistent hopelessness, appetite changes, or suicidal thoughts, immediate professional support is critical.</p>

<ul>
<li>CBT for depressive symptoms</li>
<li>Interpersonal therapy</li>
<li>Medication evaluation</li>
</ul>

<p>If you feel unsafe or at risk, seek urgent medical care.</p>

<blockquote>Your life holds value beyond this loss.</blockquote>
`,
            qr: ["I need professional help", "I feel unsafe"]
          }
        ]
      },

      general: {
        label: "General sadness / feeling low",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Gentle Activation",
            text: `
<h2>🌱 basic: Gentle Activation</h2>
<p>Low mood benefits from small behavioral activation.</p>

<ul>
<li>Shower and dress.</li>
<li>Step outside briefly.</li>
<li>Complete one small task.</li>
</ul>

<blockquote>Small action shifts mood gradually.</blockquote>
`,
            qr: ["Still low", "No energy", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Mood Tracking",
            text: `
<h2>🌿 intermediate: Mood Tracking</h2>
<p>Track mood and triggers daily.</p>

<ul>
<li>Note sleep, activity, thoughts.</li>
<li>Identify patterns.</li>
</ul>

<blockquote>Awareness guides change.</blockquote>
`,
            qr: ["Patterns show decline", "Hard to improve", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Cognitive Depression Cycle",
            text: `
<h2>🔥 advanced: Cognitive Depression Cycle</h2>
<p>Depression cycles involve withdrawal, negative thinking, and reduced reward.</p>

<ul>
<li>Challenge all-or-nothing thoughts.</li>
<li>Schedule rewarding activities.</li>
</ul>

<blockquote>Action precedes motivation.</blockquote>
`,
            qr: ["Feels persistent", "Hopeless often", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Clinical Depression",
            text: `
<h2>💎 pro: Clinical Depression</h2>
<p>If low mood persists most days for two weeks with loss of interest and impairment, professional evaluation is recommended.</p>

<ul>
<li>CBT or IPT</li>
<li>Medication consultation</li>
<li>Structured behavioral activation</li>
</ul>

<p>If you have thoughts of harming yourself or feel unsafe, seek immediate medical assistance.</p>

<blockquote>Depression is treatable with structured care.</blockquote>
`,
            qr: ["I need professional help", "I feel unsafe"]
          }
        ]
      }
    },
    subQR: ["Grief / Loss", "Loneliness", "Heartbreak / Breakup", "General sadness / feeling low"]
  },

  great: {
    label: "positive feeling",
    subtypes: {
      energised: {
        label: "Energised & motivated",
        levels: [
          {
            level: "basic",
            icon: "🌟",
            title: "Basic: Harness the Momentum",
            text: `
<h2>🌟 basic: Harness the Momentum</h2>
<p>Feeling energised is a valuable state. Your motivation system is activated, and dopamine pathways are engaged.</p>

<h3>Use It Wisely</h3>
<ul>
<li>Identify one meaningful priority.</li>
<li>Start immediately while energy is high.</li>
<li>Hydrate and pace yourself.</li>
</ul>

<p>Energy is most powerful when directed intentionally rather than scattered.</p>

<blockquote>Momentum grows when guided.</blockquote>
`,
            qr: ["I feel unstoppable", "Too many ideas", "I want structure", "Tell me more"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Strategic Channeling",
            text: `
<h2>🌿 intermediate: Strategic Channeling</h2>
<p>Sustained motivation benefits from structure.</p>

<ul>
<li>Convert goals into measurable steps.</li>
<li>Set realistic time blocks.</li>
<li>Schedule rest between tasks.</li>
</ul>

<p>Research in behavioral psychology shows that consistent pacing preserves energy longer than bursts of overexertion.</p>

<blockquote>Energy lasts longer when managed.</blockquote>
`,
            qr: ["I overwork sometimes", "Afraid of burnout", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Sustainable Drive",
            text: `
<h2>🔥 advanced: Sustainable Drive</h2>
<p>True high performance includes recovery cycles.</p>

<ul>
<li>Align goals with core values.</li>
<li>Monitor sleep consistency.</li>
<li>Practice deliberate recovery periods.</li>
</ul>

<p>Peak performance science emphasizes oscillation between effort and restoration.</p>

<blockquote>Sustainable drive beats short-lived intensity.</blockquote>
`,
            qr: ["Energy fluctuates", "I crash later", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: When Energy Becomes Unstable",
            text: `
<h2>💎 pro: When Energy Becomes Unstable</h2>
<p>If elevated mood includes impulsivity, decreased need for sleep, risky decisions, or irritability, a professional evaluation is advised.</p>

<ul>
<li>Mood assessment</li>
<li>Therapy for regulation skills</li>
<li>Medical consultation if instability persists</li>
</ul>

<p>Balanced wellbeing includes enthusiasm grounded in stability.</p>

<blockquote>Strength includes knowing when to check in.</blockquote>
`,
            qr: ["I need professional help", "Assess my mood"]
          }
        ]
      },

      peaceful: {
        label: "Peaceful & content",
        levels: [
          {
            level: "basic",
            icon: "🌟",
            title: "Basic: Savor the Calm",
            text: `
<h2>🌟 basic: Savor the Calm</h2>
<p>Contentment activates parasympathetic balance. Pause to absorb it.</p>

<ul>
<li>Take three slow breaths.</li>
<li>Notice physical relaxation.</li>
<li>Name what feels stable.</li>
</ul>

<blockquote>Peace deepens when noticed.</blockquote>
`,
            qr: ["I want this to last", "Feels rare", "Tell me more"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Build Stability Habits",
            text: `
<h2>🌿 intermediate: Build Stability Habits</h2>
<p>Contentment grows with routine.</p>

<ul>
<li>Protect sleep consistency.</li>
<li>Limit overstimulation.</li>
<li>Practice gratitude journaling.</li>
</ul>

<blockquote>Consistency protects calm.</blockquote>
`,
            qr: ["Life gets chaotic", "Hard to maintain", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Psychological Flexibility",
            text: `
<h2>🔥 advanced: Psychological Flexibility</h2>
<p>ACT models suggest flexibility maintains wellbeing.</p>

<ul>
<li>Accept shifting emotions.</li>
<li>Stay aligned with values.</li>
</ul>

<blockquote>Peace grows with acceptance.</blockquote>
`,
            qr: ["I fear losing it", "Life changes fast", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Maintaining Emotional Balance",
            text: `
<h2>💎 pro: Maintaining Emotional Balance</h2>
<p>If calm alternates with intense instability, professional guidance may help regulate mood patterns.</p>

<ul>
<li>Mood tracking</li>
<li>Therapeutic support</li>
</ul>

<blockquote>Balanced emotions create durable peace.</blockquote>
`,
            qr: ["I need professional help", "Guide me"]
          }
        ]
      },

      grateful: {
        label: "Feeling grateful",
        levels: [
          {
            level: "basic",
            icon: "🌟",
            title: "Basic: Amplify Gratitude",
            text: `
<h2>🌟 basic: Amplify Gratitude</h2>
<p>Gratitude strengthens positive neural pathways.</p>

<ul>
<li>Write three specific things you appreciate.</li>
<li>Express thanks directly if possible.</li>
</ul>

<blockquote>Gratitude expands perspective.</blockquote>
`,
            qr: ["I feel thankful", "Want deeper growth", "Tell me more"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Gratitude Practice",
            text: `
<h2>🌿 intermediate: Gratitude Practice</h2>
<p>Consistent gratitude improves wellbeing.</p>

<ul>
<li>Daily journaling.</li>
<li>Reflect on challenges that shaped growth.</li>
</ul>

<blockquote>Gratitude builds resilience.</blockquote>
`,
            qr: ["Hard during stress", "Want sustainability", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Prosocial Sharing",
            text: `
<h2>🔥 advanced: Prosocial Sharing</h2>
<p>Sharing gratitude strengthens relationships.</p>

<ul>
<li>Write appreciation letters.</li>
<li>Perform small acts of kindness.</li>
</ul>

<blockquote>Shared gratitude multiplies joy.</blockquote>
`,
            qr: ["Feels meaningful", "Want deeper impact", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Balanced Positivity",
            text: `
<h2>💎 pro: Balanced Positivity</h2>
<p>If gratitude is used to suppress real distress, professional reflection may help integrate all emotions.</p>

<ul>
<li>Therapeutic integration</li>
<li>Emotional processing support</li>
</ul>

<blockquote>True positivity includes honesty.</blockquote>
`,
            qr: ["I need professional help", "Help me balance"]
          }
        ]
      },

      accomplished: {
        label: "Accomplished / proud",
        levels: [
          {
            level: "basic",
            icon: "🌟",
            title: "Basic: Celebrate Achievement",
            text: `
<h2>🌟 basic: Celebrate Achievement</h2>
<p>Achievement reinforces self-efficacy.</p>

<ul>
<li>Pause and acknowledge effort.</li>
<li>Share success with someone.</li>
</ul>

<blockquote>Recognition strengthens confidence.</blockquote>
`,
            qr: ["I feel proud", "Want next goal", "Tell me more"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Reflect on Growth",
            text: `
<h2>🌿 intermediate: Reflect on Growth</h2>
<p>Identify skills that led to success.</p>

<ul>
<li>List strengths used.</li>
<li>Plan the next incremental challenge.</li>
</ul>

<blockquote>Growth compounds over time.</blockquote>
`,
            qr: ["Afraid of plateau", "Want sustainability", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Long-Term Mastery",
            text: `
<h2>🔥 advanced: Long-Term Mastery</h2>
<p>Mastery requires deliberate practice and recovery.</p>

<ul>
<li>Set progressive goals.</li>
<li>Track performance metrics.</li>
</ul>

<blockquote>Mastery is structured progress.</blockquote>
`,
            qr: ["Pressure rising", "Fear failure", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Achievement & Identity Balance",
            text: `
<h2>💎 pro: Achievement & Identity Balance</h2>
<p>If identity becomes entirely achievement-based, stress and instability may follow.</p>

<ul>
<li>Explore identity beyond performance.</li>
<li>Seek professional reflection if perfectionism dominates.</li>
</ul>

<blockquote>Your worth exceeds outcomes.</blockquote>
`,
            qr: ["I need professional help", "Help me balance"]
          }
        ]
      }
    },
    subQR: ["Energised & motivated", "Peaceful & content", "Feeling grateful", "Accomplished / proud"]
  },

  sleep: {
    label: "sleep issues",
    subtypes: {
      insomnia: {
        label: "Can't fall asleep",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Reset the Wind-Down",
            text: `
<h2>🌱 basic: Reset the Wind-Down</h2>
<p>Difficulty falling asleep is often caused by cognitive overactivation.</p>

<ul>
<li>Dim lights 60 minutes before bed.</li>
<li>Avoid screens 30 minutes before sleep.</li>
<li>Practice 4-6 breathing in bed.</li>
</ul>

<p>If awake longer than 20 minutes, get up briefly and return when sleepy.</p>

<blockquote>Sleep arrives when pressure builds naturally.</blockquote>
`,
            qr: ["Mind races at night", "I check my phone", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Stimulus Control",
            text: `
<h2>🌿 intermediate: Stimulus Control</h2>
<p>CBT-I emphasizes retraining the bed as a sleep cue.</p>

<ul>
<li>Use bed only for sleep.</li>
<li>Go to bed only when sleepy.</li>
<li>Wake at the same time daily.</li>
</ul>

<blockquote>Consistency strengthens circadian rhythm.</blockquote>
`,
            qr: ["Still awake long", "Schedule is irregular", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Sleep Restriction Therapy",
            text: `
<h2>🔥 advanced: Sleep Restriction Therapy</h2>
<p>Paradoxically, limiting time in bed improves sleep efficiency.</p>

<ul>
<li>Calculate average sleep duration.</li>
<li>Restrict bed time to that window.</li>
<li>Gradually expand as efficiency improves.</li>
</ul>

<p>This should be applied carefully and consistently.</p>

<blockquote>Sleep quality improves with structured timing.</blockquote>
`,
            qr: ["Feels exhausting", "Hard to sustain", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Chronic Insomnia Disorder",
            text: `
<h2>💎 pro: Chronic Insomnia Disorder</h2>
<p>If insomnia persists for months, clinical intervention is recommended.</p>

<ul>
<li>Formal CBT-I program</li>
<li>Evaluation for anxiety or depression</li>
<li>Medication consultation if indicated</li>
</ul>

<p>If exhaustion causes safety risks, seek immediate medical care.</p>

<blockquote>Chronic insomnia is treatable with structured care.</blockquote>
`,
            qr: ["I need professional help", "Assess my sleep"]
          }
        ]
      },

      waking: {
        label: "Waking up during the night",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Calm Re-Entry",
            text: `
<h2>🌱 basic: Calm Re-Entry</h2>
<p>Night awakenings are normal but stress can prolong them.</p>

<ul>
<li>Avoid clock-checking.</li>
<li>Slow breathing.</li>
<li>Stay relaxed rather than forcing sleep.</li>
</ul>

<blockquote>Pressure delays sleep.</blockquote>
`,
            qr: ["Wake at 3am", "Hard to return", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Address Triggers",
            text: `
<h2>🌿 intermediate: Address Triggers</h2>
<p>Common causes include stress and caffeine.</p>

<ul>
<li>Limit caffeine after afternoon.</li>
<li>Evening wind-down routine.</li>
</ul>

<blockquote>Evening habits shape midnight patterns.</blockquote>
`,
            qr: ["Still frequent", "Stress related", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Anxiety Link",
            text: `
<h2>🔥 advanced: Anxiety Link</h2>
<p>Night waking may reflect hyperarousal.</p>

<ul>
<li>Practice daytime stress reduction.</li>
<li>CBT for nocturnal rumination.</li>
</ul>

<blockquote>Day stress echoes at night.</blockquote>
`,
            qr: ["Feels chronic", "Panic at night", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Sleep Disorder Evaluation",
            text: `
<h2>💎 pro: Sleep Disorder Evaluation</h2>
<p>Persistent awakenings may require evaluation for insomnia disorder or other sleep conditions.</p>

<ul>
<li>CBT-I</li>
<li>Medical screening</li>
</ul>

<p>If severe exhaustion affects safety, seek urgent medical support.</p>

<blockquote>Professional evaluation restores sleep stability.</blockquote>
`,
            qr: ["I need professional help", "Guide me"]
          }
        ]
      },

      tiredness: {
        label: "Always tired / no energy",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Energy Reset",
            text: `
<h2>🌱 basic: Energy Reset</h2>
<p>Daytime fatigue may result from inconsistent sleep.</p>

<ul>
<li>Wake at fixed time.</li>
<li>Morning sunlight exposure.</li>
<li>Hydrate early.</li>
</ul>

<blockquote>Morning anchors rhythm.</blockquote>
`,
            qr: ["Still exhausted", "Low all day", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Lifestyle Audit",
            text: `
<h2>🌿 intermediate: Lifestyle Audit</h2>
<p>Energy depends on multiple systems.</p>

<ul>
<li>Review sleep hours.</li>
<li>Check stress load.</li>
<li>Balanced nutrition.</li>
</ul>

<blockquote>Energy reflects system balance.</blockquote>
`,
            qr: ["No improvement", "Feel drained weeks", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Mood & Fatigue",
            text: `
<h2>🔥 advanced: Mood & Fatigue</h2>
<p>Persistent fatigue may overlap with depression or anxiety.</p>

<ul>
<li>Screen mood symptoms.</li>
<li>Behavioral activation scheduling.</li>
</ul>

<blockquote>Energy follows mental health.</blockquote>
`,
            qr: ["Feels depressive", "Constant fatigue", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Clinical Evaluation for Fatigue",
            text: `
<h2>💎 pro: Clinical Evaluation for Fatigue</h2>
<p>Chronic fatigue warrants professional assessment.</p>

<ul>
<li>Sleep disorder screening</li>
<li>Mood disorder evaluation</li>
<li>Medical check if indicated</li>
</ul>

<p>If exhaustion impairs safety, seek medical care.</p>

<blockquote>Persistent fatigue deserves thorough evaluation.</blockquote>
`,
            qr: ["I need professional help", "Assess my health"]
          }
        ]
      },

      nightmares: {
        label: "Nightmares / disturbed sleep",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Reorient After Waking",
            text: `
<h2>🌱 basic: Reorient After Waking</h2>
<p>Nightmares activate fight-or-flight.</p>

<ul>
<li>Turn on dim light.</li>
<li>Slow breathing.</li>
<li>Remind yourself you are safe.</li>
</ul>

<blockquote>The body needs reassurance.</blockquote>
`,
            qr: ["They’re frequent", "Very vivid", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Imagery Rehearsal",
            text: `
<h2>🌿 intermediate: Imagery Rehearsal</h2>
<p>Rewrite the nightmare with a safe ending.</p>

<ul>
<li>Practice daily visualization.</li>
</ul>

<blockquote>Imagery reshapes memory patterns.</blockquote>
`,
            qr: ["Still recurring", "Linked to trauma", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Trauma Link",
            text: `
<h2>🔥 advanced: Trauma Link</h2>
<p>Frequent nightmares may relate to trauma.</p>

<ul>
<li>Trauma-focused CBT</li>
<li>EMDR-style approaches</li>
</ul>

<blockquote>Trauma responses can be processed safely.</blockquote>
`,
            qr: ["Feels traumatic", "Sleep disrupted often", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Nightmare Disorder",
            text: `
<h2>💎 pro: Nightmare Disorder</h2>
<p>Persistent distressing dreams with impairment require professional care.</p>

<ul>
<li>Structured trauma therapy</li>
<li>Sleep specialist consultation</li>
</ul>

<p>If nightmares cause severe distress or safety risk, seek medical assistance.</p>

<blockquote>Restful sleep can be restored.</blockquote>
`,
            qr: ["I need professional help", "I feel unsafe"]
          }
        ]
      }
    },
    subQR: ["Can't fall asleep", "Waking up during the night", "Always tired / no energy", "Nightmares / disturbed sleep"]
  },
    stress: {
    label: "stress",
    subtypes: {

      work: {
        label: "Work / Academic stress",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Reduce Immediate Load",
            text: `
<h2>🌱 basic: Reduce Immediate Load</h2>
<p>Work stress often comes from perceived overload or lack of control.</p>

<ul>
<li>List all tasks and circle only the top 1–2 priorities.</li>
<li>Work in 25-minute focused blocks.</li>
<li>Take a 5-minute movement break.</li>
</ul>

<p>Narrowing focus reduces cognitive overwhelm and restores clarity.</p>

<blockquote>Clarity lowers stress.</blockquote>
`,
            qr: ["Too many deadlines", "Boss pressure", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Control What You Can",
            text: `
<h2>🌿 intermediate: Control What You Can</h2>
<p>Stress decreases when control increases.</p>

<ul>
<li>Separate controllable vs uncontrollable tasks.</li>
<li>Communicate workload boundaries clearly.</li>
<li>Schedule recovery time intentionally.</li>
</ul>

<blockquote>Boundaries protect performance.</blockquote>
`,
            qr: ["Hard to say no", "Still overwhelmed", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Burnout Prevention",
            text: `
<h2>🔥 advanced: Burnout Prevention</h2>
<p>Chronic stress may lead to burnout: emotional exhaustion, cynicism, reduced performance.</p>

<ul>
<li>Track energy patterns.</li>
<li>Align tasks with core values.</li>
<li>Introduce restorative non-work activities.</li>
</ul>

<blockquote>Sustainable output requires recovery.</blockquote>
`,
            qr: ["Feeling exhausted", "Work feels meaningless", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Occupational Stress Disorder",
            text: `
<h2>💎 pro: Occupational Stress Disorder</h2>
<p>If stress leads to insomnia, panic, depression, or health decline, professional evaluation is recommended.</p>

<ul>
<li>CBT for stress management</li>
<li>Burnout-focused therapy</li>
<li>Medical consultation if symptoms persist</li>
</ul>

<p>Structured intervention can restore balance.</p>

<blockquote>Chronic stress deserves structured care.</blockquote>
`,
            qr: ["I need professional help", "Guide me"]
          }
        ]
      },

      relationship: {
        label: "Relationship stress",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Pause Before Reacting",
            text: `
<h2>🌱 basic: Pause Before Reacting</h2>
<p>Relationship stress often escalates through reactive communication.</p>

<ul>
<li>Pause before responding.</li>
<li>Use “I feel” statements.</li>
<li>Focus on one issue at a time.</li>
</ul>

<blockquote>Calm communication reduces conflict.</blockquote>
`,
            qr: ["Frequent arguments", "Misunderstood", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Identify Patterns",
            text: `
<h2>🌿 intermediate: Identify Patterns</h2>
<p>Conflicts often follow predictable cycles.</p>

<ul>
<li>Notice triggers.</li>
<li>Identify unmet needs.</li>
<li>Schedule structured conversations.</li>
</ul>

<blockquote>Patterns can be changed.</blockquote>
`,
            qr: ["Same fight repeats", "Trust issues", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Attachment Styles",
            text: `
<h2>🔥 advanced: Attachment Styles</h2>
<p>Stress may reflect anxious or avoidant attachment patterns.</p>

<ul>
<li>Explore your attachment style.</li>
<li>Practice emotional regulation.</li>
</ul>

<blockquote>Understanding attachment improves connection.</blockquote>
`,
            qr: ["Feels unstable", "Fear abandonment", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Relationship Therapy Consideration",
            text: `
<h2>💎 pro: Relationship Therapy Consideration</h2>
<p>If stress involves emotional harm, persistent distress, or safety concerns, professional support is strongly advised.</p>

<ul>
<li>Couples therapy</li>
<li>Individual therapy</li>
<li>Conflict resolution support</li>
</ul>

<blockquote>Healthy relationships benefit from structured guidance.</blockquote>
`,
            qr: ["I need professional help", "Help us"]
          }
        ]
      },

      financial: {
        label: "Financial stress",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Clarify the Numbers",
            text: `
<h2>🌱 basic: Clarify the Numbers</h2>
<p>Financial stress increases when uncertainty is high.</p>

<ul>
<li>List income and expenses.</li>
<li>Identify one small saving action.</li>
<li>Avoid catastrophic thinking.</li>
</ul>

<blockquote>Clarity reduces fear.</blockquote>
`,
            qr: ["Debt worries", "Income unstable", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Planning Structure",
            text: `
<h2>🌿 intermediate: Planning Structure</h2>
<p>Structured budgeting reduces anxiety.</p>

<ul>
<li>Create short-term payment goals.</li>
<li>Automate essential payments.</li>
</ul>

<blockquote>Structure builds stability.</blockquote>
`,
            qr: ["Still anxious", "Unexpected expenses", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Stress & Scarcity Mindset",
            text: `
<h2>🔥 advanced: Stress & Scarcity Mindset</h2>
<p>Financial strain can create persistent threat perception.</p>

<ul>
<li>Practice cognitive reframing.</li>
<li>Focus on incremental progress.</li>
</ul>

<blockquote>Progress matters more than perfection.</blockquote>
`,
            qr: ["Constant fear", "Feels hopeless", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Chronic Financial Anxiety",
            text: `
<h2>💎 pro: Chronic Financial Anxiety</h2>
<p>If financial stress leads to insomnia, panic, or depressive symptoms, therapy may help address underlying anxiety patterns.</p>

<ul>
<li>CBT for anxiety</li>
<li>Stress regulation therapy</li>
</ul>

<blockquote>Financial stress can be managed with support.</blockquote>
`,
            qr: ["I need professional help", "Help me cope"]
          }
        ]
      },

      general: {
        label: "General / I'm not sure",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Immediate Regulation",
            text: `
<h2>🌱 basic: Immediate Regulation</h2>
<p>Stress activates fight-or-flight.</p>

<ul>
<li>Slow breathing for 2 minutes.</li>
<li>Reduce caffeine.</li>
<li>Short physical movement.</li>
</ul>

<blockquote>Calm begins physically.</blockquote>
`,
            qr: ["Always tense", "Restless", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Stress Mapping",
            text: `
<h2>🌿 intermediate: Stress Mapping</h2>
<p>Identify triggers and patterns.</p>

<ul>
<li>Track stress moments daily.</li>
<li>Note physical responses.</li>
</ul>

<blockquote>Awareness reduces reactivity.</blockquote>
`,
            qr: ["Feels constant", "Hard to manage", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Chronic Stress Cycle",
            text: `
<h2>🔥 advanced: Chronic Stress Cycle</h2>
<p>Chronic stress alters cortisol patterns.</p>

<ul>
<li>Structured relaxation routines.</li>
<li>Sleep prioritization.</li>
</ul>

<blockquote>Recovery breaks the cycle.</blockquote>
`,
            qr: ["Burned out", "Sleep affected", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Clinical Stress Disorder",
            text: `
<h2>💎 pro: Clinical Stress Disorder</h2>
<p>If stress leads to panic, depression, or health issues, professional care is advised.</p>

<ul>
<li>CBT for stress</li>
<li>Medical consultation</li>
</ul>

<blockquote>Chronic stress requires structured care.</blockquote>
`,
            qr: ["I need professional help", "I feel unsafe"]
          }
        ]
      }
    },
    subQR: ["Work / Academic stress", "Relationship stress", "Financial stress", "General / I'm not sure"]
  },

  coping: {
    label: "coping",
    subtypes: {

      overwhelm: {
        label: "I'm overwhelmed",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: One Task Only",
            text: `
<h2>🌱 basic: One Task Only</h2>
<p>Overwhelm comes from cognitive overload.</p>

<ul>
<li>Choose one small action.</li>
<li>Work 10 minutes.</li>
<li>Ignore everything else temporarily.</li>
</ul>

<blockquote>One step reduces chaos.</blockquote>
`,
            qr: ["Still too much", "Mind racing", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Capacity Check",
            text: `
<h2>🌿 intermediate: Capacity Check</h2>
<p>Assess realistic bandwidth.</p>

<ul>
<li>Eliminate non-essentials.</li>
<li>Ask for support.</li>
</ul>

<blockquote>Limits are protective.</blockquote>
`,
            qr: ["Hard to delegate", "Pressure high", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Nervous System Reset",
            text: `
<h2>🔥 advanced: Nervous System Reset</h2>
<p>Overwhelm reflects sympathetic dominance.</p>

<ul>
<li>Progressive muscle relaxation.</li>
<li>Daily decompression ritual.</li>
</ul>

<blockquote>Regulation restores clarity.</blockquote>
`,
            qr: ["Feels chronic", "Exhausted", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Burnout or Anxiety Condition",
            text: `
<h2>💎 pro: Burnout or Anxiety Condition</h2>
<p>Persistent overwhelm may signal anxiety disorder or burnout.</p>

<ul>
<li>Structured CBT</li>
<li>Stress evaluation</li>
</ul>

<blockquote>Support increases coping capacity.</blockquote>
`,
            qr: ["I need professional help", "Assess me"]
          }
        ]
      },

      procrastination: {
        label: "I'm procrastinating",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: 5-Minute Rule",
            text: `
<h2>🌱 basic: 5-Minute Rule</h2>
<p>Start with just 5 minutes.</p>

<ul>
<li>Set timer.</li>
<li>Remove distractions.</li>
</ul>

<blockquote>Starting is the hardest part.</blockquote>
`,
            qr: ["Still avoiding", "Fear failure", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Break It Down",
            text: `
<h2>🌿 intermediate: Break It Down</h2>
<p>Divide into micro-tasks.</p>

<ul>
<li>Write first sentence only.</li>
<li>Complete smallest part.</li>
</ul>

<blockquote>Small tasks reduce resistance.</blockquote>
`,
            qr: ["Perfectionism blocks me", "Still stuck", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Emotional Avoidance",
            text: `
<h2>🔥 advanced: Emotional Avoidance</h2>
<p>Procrastination protects from discomfort.</p>

<ul>
<li>Identify feared outcome.</li>
<li>Challenge catastrophic thinking.</li>
</ul>

<blockquote>Avoidance feels safe but costs progress.</blockquote>
`,
            qr: ["Chronic issue", "Deep fear", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Executive Dysfunction Screening",
            text: `
<h2>💎 pro: Executive Dysfunction Screening</h2>
<p>Persistent procrastination may relate to ADHD, depression, or anxiety.</p>

<ul>
<li>Clinical evaluation</li>
<li>Behavioral activation therapy</li>
</ul>

<blockquote>Root causes deserve assessment.</blockquote>
`,
            qr: ["I need professional help", "Assess further"]
          }
        ]
      },

      anger: {
        label: "I'm angry / frustrated",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Pause",
            text: `
<h2>🌱 basic: Pause</h2>
<p>Anger is high arousal.</p>

<ul>
<li>Step away.</li>
<li>Slow breathing.</li>
</ul>

<blockquote>Pause prevents regret.</blockquote>
`,
            qr: ["Explode quickly", "It escalates", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Identify Need",
            text: `
<h2>🌿 intermediate: Identify Need</h2>
<p>Anger signals unmet needs.</p>

<ul>
<li>Name the need.</li>
<li>Communicate assertively.</li>
</ul>

<blockquote>Understanding softens anger.</blockquote>
`,
            qr: ["Still reactive", "Recurring fights", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Regulation Skills",
            text: `
<h2>🔥 advanced: Regulation Skills</h2>
<p>Use distress tolerance techniques.</p>

<ul>
<li>Cold water reset.</li>
<li>Opposite action skill.</li>
</ul>

<blockquote>Regulation is trainable.</blockquote>
`,
            qr: ["Feels uncontrollable", "I regret later", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Impulse or Anger Disorder",
            text: `
<h2>💎 pro: Impulse or Anger Disorder</h2>
<p>If anger causes harm or legal risk, professional support is essential.</p>

<ul>
<li>Anger management therapy</li>
<li>Impulse control treatment</li>
</ul>

<blockquote>Uncontrolled anger deserves structured care.</blockquote>
`,
            qr: ["I need professional help", "I feel out of control"]
          }
        ]
      },

      motivation: {
        label: "I lack motivation",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Activate Small Action",
            text: `
<h2>🌱 basic: Activate Small Action</h2>
<p>Motivation often follows action.</p>

<ul>
<li>Complete one tiny task.</li>
<li>Change environment briefly.</li>
</ul>

<blockquote>Action builds momentum.</blockquote>
`,
            qr: ["Still low energy", "Feels pointless", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Clarify Purpose",
            text: `
<h2>🌿 intermediate: Clarify Purpose</h2>
<p>Reconnect with long-term meaning.</p>

<ul>
<li>Write why this matters.</li>
<li>Set small reward.</li>
</ul>

<blockquote>Purpose fuels effort.</blockquote>
`,
            qr: ["Hard to care", "Still flat", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Behavioral Activation",
            text: `
<h2>🔥 advanced: Behavioral Activation</h2>
<p>Schedule rewarding activities even without motivation.</p>

<ul>
<li>Plan structured daily activity.</li>
<li>Track completion.</li>
</ul>

<blockquote>Consistency restores drive.</blockquote>
`,
            qr: ["Low for weeks", "Feels depressive", "Move to pro"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Depression Screening",
            text: `
<h2>💎 pro: Depression Screening</h2>
<p>Persistent lack of motivation may indicate depressive disorder.</p>

<ul>
<li>Clinical evaluation</li>
<li>CBT or medication consultation</li>
</ul>

<p>If you feel unsafe, seek urgent medical care.</p>

<blockquote>Lack of motivation can be treated.</blockquote>
`,
            qr: ["I need professional help", "I feel unsafe"]
          }
        ]
      }

    },
    subQR: ["I'm overwhelmed", "I'm procrastinating", "I'm angry / frustrated", "I lack motivation"]
  }
}; // end DATASET

