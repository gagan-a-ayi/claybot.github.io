// ClayBot Dataset — claybot-dataset.js
const CONSULT_LEVEL = {
  label: "consult",
  icon: "🏥",
  title: "Time to Reach Out to a Professional",
  text: `<h2>🏥 Time to Reach Out to a Professional</h2>
<p>You've shown real courage engaging with these tools, and it means a lot that you're taking your mental health seriously. Sometimes, though, self-help reaches its natural limit — and that's not a failure. It's a signal that you deserve more personalised, expert support.</p>
<h3>What Kind of Professional Can Help?</h3>
<ul>
<li><strong>Psychologist / Clinical Psychologist</strong> — Specialises in psychological assessment and therapy (CBT, ACT, DBT, etc.). Cannot prescribe medication.</li>
<li><strong>Psychiatrist</strong> — A medical doctor who can diagnose mental health conditions and prescribe medication if needed.</li>
<li><strong>Counsellor / Therapist</strong> — Offers talk therapy for emotional difficulties, stress, relationships, and life transitions.</li>
<li><strong>General Practitioner (GP / Family Doctor)</strong> — Often the first port of call. Can screen for depression/anxiety, provide referrals, and in some cases prescribe.</li>
<li><strong>Social Worker / Community Mental Health Worker</strong> — Provides support, connects you to local services, and can offer counselling.</li>
</ul>
<h3>Online Therapy Platforms</h3>
<ul>
<li><code>betterhelp.com</code> — Global online therapy with licensed therapists</li>
<li><code>talkspace.com</code> — Text, audio, and video therapy options</li>
<li><code>yourdost.com</code> — Indian platform for online counselling</li>
<li><code>innerspace.in</code> — India-based mental health platform</li>
<li><code>mindpeers.co</code> — India-focused therapy and coaching</li>
</ul>
<h3>International Crisis &amp; Helplines</h3>
<ul>
<li><strong>India</strong> — iCall: <code>9152987821</code> | Vandrevala Foundation: <code>1860-2662-345</code> (24/7) | AASRA: <code>9820466627</code></li>
<li><strong>United States</strong> — 988 Suicide &amp; Crisis Lifeline: <code>988</code> | Crisis Text Line: text HOME to <code>741741</code></li>
<li><strong>United Kingdom</strong> — Samaritans: <code>116 123</code> (free, 24/7) | CALM: <code>0800 58 58 58</code></li>
<li><strong>Australia</strong> — Lifeline: <code>13 11 14</code> | Beyond Blue: <code>1300 22 4636</code></li>
</ul>
<h3>Directories to Find a Therapist</h3>
<ul>
<li><code>psychologytoday.com/us/therapists</code> — US &amp; international directory</li>
<li><code>babcp.com/find-a-therapist</code> — UK-based CBT therapists</li>
<li><code>healthdirect.gov.au</code> — Australian health service finder</li>
<li><code>therapyroute.com</code> — Global therapist directory</li>
</ul>
<blockquote><em>"Asking for help is not a weakness — it is the bravest thing you can do for yourself."</em></blockquote>`,
  sources: ["betterhelp.com", "psychologytoday.com", "iCall.in", "samaritans.org", "lifeline.org.au"]
};

const DATASET = {

  // ─────────────────────────────────────────────
  // TOPIC 1: STRESS
  // ─────────────────────────────────────────────
  stress: {
    label: "stress",
    subtypes: {
      work: {
        label: "Work / Academic Stress",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: First Steps to Calm",
            text: `<h2>🌱 Basic: First Steps to Calm</h2>
<p>Work and academic stress can feel like a relentless wave — deadlines, expectations, and the pressure to perform. You're not alone in this, and there are some quick, effective ways to start feeling better right now.</p>
<h3>Try This Right Now</h3>
<ul>
<li><strong>Box Breathing (4-4-4-4)</strong> — Inhale for 4 counts, hold for 4, exhale for 4, hold for 4. Repeat 4 times. This activates your parasympathetic nervous system and reduces the stress response within minutes.</li>
<li><strong>Write It Down</strong> — Take a piece of paper and do a "brain dump." Write every task, worry, or to-do item that's in your head. Getting it out of your mind and onto paper reduces cognitive load significantly.</li>
<li><strong>The 2-Minute Rule</strong> — If something on your list takes less than 2 minutes, do it immediately. Small wins build momentum and reduce the pile-up feeling.</li>
</ul>
<h3>Quick Environment Shifts</h3>
<ul>
<li>Step away from your screen for 5 minutes — even a short walk or looking out a window reduces cortisol.</li>
<li>Tidy your workspace. A cluttered environment amplifies a cluttered mind.</li>
<li>Drink a glass of water. Dehydration worsens anxiety and cognitive function.</li>
</ul>
<blockquote><em>"You don't have to see the whole staircase. Just take the first step." — Martin Luther King Jr.</em></blockquote>`,
            qr: ["That helped a little", "I'm still overwhelmed", "Tell me more techniques", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Structured Strategies",
            text: `<h2>🌿 Intermediate: Structured Strategies</h2>
<p>When stress is persistent, you need more than quick fixes — you need systems. Here are structured, evidence-based approaches to managing work and academic stress sustainably.</p>
<h3>Time Management: The Pomodoro Technique</h3>
<ul>
<li>Work for <strong>25 minutes</strong> on a single task, then take a 5-minute break. After 4 cycles, take a 20–30 minute break.</li>
<li>This harnesses focused attention while preventing burnout. Apps: <code>Forest</code>, <code>Be Focused</code>, or a simple timer.</li>
</ul>
<h3>Priority Matrix (Eisenhower Matrix)</h3>
<ul>
<li>Divide tasks into: <strong>Urgent &amp; Important</strong> (do now), <strong>Not Urgent but Important</strong> (schedule it), <strong>Urgent but Not Important</strong> (delegate), <strong>Neither</strong> (delete).</li>
<li>Most stress comes from treating everything as urgent. This matrix recalibrates perspective.</li>
</ul>
<h3>Stress Journalling</h3>
<ul>
<li>Each evening, write 3 things: what stressed you, how you responded, and what you'd do differently. This builds self-awareness and reduces rumination.</li>
</ul>
<h3>Boundaries at Work</h3>
<ul>
<li>Identify one boundary you're not keeping — e.g., answering emails after 9pm. Commit to protecting it for one week and notice the difference.</li>
</ul>
<blockquote><em>"Almost everything will work again if you unplug it for a few minutes, including you." — Anne Lamott</em></blockquote>`,
            qr: ["I struggle with time management", "How do I set better boundaries?", "I need deeper techniques", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Psychological Frameworks",
            text: `<h2>🔥 Advanced: Psychological Frameworks</h2>
<p>Chronic work stress is rarely just about workload — it's often about how we think about work, our relationship with failure, and deeper patterns. Let's explore the psychological roots.</p>
<h3>CBT: Identifying Cognitive Distortions</h3>
<ul>
<li><strong>Catastrophising</strong> — "If I miss this deadline, my career is over." Challenge this by asking: "What's the realistic worst case? How likely is it?"</li>
<li><strong>All-or-nothing thinking</strong> — "I either do this perfectly or I'm a failure." Try replacing with: "I can do this well enough."</li>
<li>Keep a <em>thought record</em>: situation → automatic thought → emotion → evidence for/against → balanced thought.</li>
</ul>
<h3>ACT: Psychological Flexibility</h3>
<ul>
<li>Acceptance and Commitment Therapy teaches us to <strong>defuse</strong> from stressful thoughts rather than fighting them. Try: "I notice I'm having the thought that I'm not good enough" rather than "I'm not good enough."</li>
<li>Identify your <strong>values</strong> — what truly matters to you about your work? Stress reduces when actions align with values, not just deadlines.</li>
</ul>
<h3>The Role of Perfectionism</h3>
<ul>
<li>Research by Dr. Brené Brown links perfectionism to burnout. Perfectionism is not the same as high standards — it's shame-driven. Notice when your inner critic says "I should be better" rather than "I want to improve."</li>
</ul>
<h3>Nervous System Regulation</h3>
<ul>
<li>Chronic work stress keeps the sympathetic nervous system activated. Practices like cold exposure, vigorous exercise, and yoga nidra have evidence for down-regulating this response.</li>
</ul>
<blockquote><em>"The curious paradox is that when I accept myself just as I am, then I can change." — Carl Rogers</em></blockquote>`,
            qr: ["I think I'm a perfectionist", "ACT sounds interesting", "I might have burnout", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Recognising Burnout & Seeking Help",
            text: `<h2>💎 Pro: Recognising Burnout &amp; Seeking Help</h2>
<p>If you've worked through the previous levels and stress is still overwhelming, it's important to consider whether something more serious is at play. Burnout, occupational anxiety disorder, and work-related depression are real clinical conditions — not character flaws.</p>
<h3>Signs of Clinical Burnout (WHO ICD-11)</h3>
<ul>
<li>Feelings of energy depletion or exhaustion</li>
<li>Increased mental distance from your job — cynicism or detachment</li>
<li>Reduced professional efficacy even when you try hard</li>
<li>These symptoms persist for weeks or months, not just bad days</li>
</ul>
<h3>Treatment Options</h3>
<ul>
<li><strong>Cognitive Behavioural Therapy (CBT)</strong> — Gold standard for work-related anxiety and perfectionism. Typically 8–12 sessions.</li>
<li><strong>Psychodynamic Therapy</strong> — Explores early patterns that drive overwork or people-pleasing.</li>
<li><strong>Medication</strong> — SSRIs (e.g. sertraline, fluoxetine) may be recommended by a psychiatrist for anxiety or depression co-occurring with burnout.</li>
<li><strong>Occupational Health Services</strong> — Many employers offer EAP (Employee Assistance Programme) — free, confidential counselling. Ask your HR department.</li>
</ul>
<h3>Immediate Resources</h3>
<ul>
<li>India — iCall: <code>9152987821</code> | Vandrevala Foundation: <code>1860-2662-345</code></li>
<li>US — 988 Lifeline: <code>988</code></li>
<li>UK — Samaritans: <code>116 123</code></li>
<li>Australia — Lifeline: <code>13 11 14</code></li>
</ul>
<blockquote><em>"Rest is not a reward for work completed. It is a prerequisite for work worth doing."</em></blockquote>`,
            qr: ["I need professional help", "How do I find a therapist?"]
          }
        ]
      },
      relationship: {
        label: "Relationship Stress",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Grounding in the Storm",
            text: `<h2>🌱 Basic: Grounding in the Storm</h2>
<p>Relationship stress — whether with a partner, family member, friend, or colleague — can feel deeply personal and exhausting. Your feelings make complete sense. Here are some immediate steps to help you find your footing.</p>
<h3>Right Now: Create Space</h3>
<ul>
<li><strong>Physical grounding</strong> — Press both feet firmly on the floor. Notice the sensation. Take 3 slow, deep breaths. This interrupts the stress loop in your body.</li>
<li><strong>Don't respond immediately</strong> — If you're in the middle of a conflict, it's okay to say: "I need 20 minutes to think before I respond." This prevents saying things you'll regret.</li>
<li><strong>Write unsent letters</strong> — Write everything you wish you could say to the other person. Don't send it. This releases emotional pressure without escalating conflict.</li>
</ul>
<h3>Understanding the Stress Response in Conflict</h3>
<ul>
<li>When we feel attacked or misunderstood, our brain triggers fight-or-flight. Logical thinking shuts down. This is why arguments escalate — neither person is truly "present."</li>
<li>Recognising this can help you extend compassion to yourself <em>and</em> the other person.</li>
</ul>
<blockquote><em>"The most important thing in communication is hearing what isn't said." — Peter Drucker</em></blockquote>`,
            qr: ["I want to communicate better", "This is a recurring fight", "I feel very hurt", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Communication Tools",
            text: `<h2>🌿 Intermediate: Communication Tools</h2>
<p>Better communication is the foundation of healthier relationships. These techniques are practical, evidence-based, and can shift conflict patterns significantly.</p>
<h3>Non-Violent Communication (NVC) — Marshall Rosenberg</h3>
<ul>
<li>NVC has four steps: <strong>Observation</strong> (what happened, without judgment), <strong>Feeling</strong> (how you feel), <strong>Need</strong> (what underlying need is unmet), <strong>Request</strong> (a specific, doable request).</li>
<li>Example: "When you didn't respond to my message for hours (observation), I felt anxious and unimportant (feeling), because I need reassurance that we're okay (need). Could you let me know when you're busy? (request)"</li>
</ul>
<h3>Active Listening</h3>
<ul>
<li>Reflect back what you hear: "It sounds like you felt dismissed when I said that — is that right?" This de-escalates and builds trust.</li>
<li>Avoid formulating your rebuttal while they're speaking. Truly listen first.</li>
</ul>
<h3>Repair Attempts</h3>
<ul>
<li>Dr. John Gottman's research shows that couples who make "repair attempts" during conflict — small gestures like touching their partner's arm, saying "I'm getting defensive," or making a small joke — have significantly more stable relationships.</li>
</ul>
<blockquote><em>"Being heard is so close to being loved that for the average person they are almost indistinguishable." — David Augsburger</em></blockquote>`,
            qr: ["I've tried NVC but it doesn't work", "What is my attachment style?", "Is this relationship healthy?", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Attachment & Patterns",
            text: `<h2>🔥 Advanced: Attachment &amp; Patterns</h2>
<p>Persistent relationship stress often points to deeper patterns rooted in our attachment history. Understanding this can be transformative.</p>
<h3>Attachment Theory (Bowlby, Ainsworth)</h3>
<ul>
<li><strong>Secure attachment</strong> — Comfortable with closeness and independence. Conflict is managed well.</li>
<li><strong>Anxious attachment</strong> — Fear of abandonment, hypervigilance to partner's moods, clinginess. Stress often manifests as over-seeking reassurance.</li>
<li><strong>Avoidant attachment</strong> — Discomfort with closeness, withdrawal during conflict, emotional suppression.</li>
<li><strong>Disorganised/Fearful attachment</strong> — Mixed responses, often linked to early trauma.</li>
</ul>
<h3>Identifying Your Pattern</h3>
<ul>
<li>Notice: Do you tend to <em>pursue</em> (call, text repeatedly, escalate) or <em>withdraw</em> (go silent, shut down) in conflict? This often maps to anxious vs. avoidant styles.</li>
<li>The "pursue-withdraw" dance is the most common conflict pattern in couples — and it's rooted in attachment, not malice.</li>
</ul>
<h3>Emotionally Focused Therapy (EFT)</h3>
<ul>
<li>Developed by Dr. Sue Johnson, EFT restructures the emotional bond between partners. Even reading <em>Hold Me Tight</em> (Johnson, 2008) can shift your perspective significantly.</li>
</ul>
<h3>Self-Compassion First</h3>
<ul>
<li>You cannot show up well in relationships when you're running on empty. Dr. Kristin Neff's research on self-compassion shows it directly improves relationship quality by reducing self-critical reactivity.</li>
</ul>
<blockquote><em>"Vulnerability is not winning or losing. It's having the courage to show up when you can't control the outcome." — Brené Brown</em></blockquote>`,
            qr: ["I think I have anxious attachment", "Is couples therapy helpful?", "This feels like a toxic pattern", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: When Self-Help Isn't Enough",
            text: `<h2>💎 Pro: When Self-Help Isn't Enough</h2>
<p>Some relationship difficulties — especially those involving chronic conflict, trauma, abuse, or deeply entrenched patterns — genuinely require professional intervention. Recognising this is wisdom, not weakness.</p>
<h3>Signs Professional Help Is Needed</h3>
<ul>
<li>Repeated cycles of conflict with no resolution despite genuine effort</li>
<li>Presence of emotional, verbal, or physical abuse (any kind)</li>
<li>One or both partners experiencing depression or anxiety as a result of the relationship</li>
<li>Past trauma (e.g. childhood experiences) driving present relationship reactions</li>
</ul>
<h3>Professional Options</h3>
<ul>
<li><strong>Couples / Relationship Therapy</strong> — EFT, Gottman Method, or Imago Therapy. Both partners attend. Highly effective.</li>
<li><strong>Individual Therapy</strong> — To address your own attachment patterns, trauma history, or emotional regulation challenges.</li>
<li><strong>EMDR (Eye Movement Desensitisation and Reprocessing)</strong> — Especially helpful if past trauma is affecting current relationships.</li>
</ul>
<h3>If You're in an Unsafe Relationship</h3>
<ul>
<li>India — iCall: <code>9152987821</code> | Women's Helpline: <code>1091</code></li>
<li>US — National Domestic Violence Hotline: <code>1-800-799-7233</code></li>
<li>UK — National Domestic Abuse Helpline: <code>0808 2000 247</code></li>
<li>Australia — 1800RESPECT: <code>1800 737 732</code></li>
</ul>
<blockquote><em>"You deserve a love that doesn't require you to abandon yourself."</em></blockquote>`,
            qr: ["I need professional help", "How do I leave safely?"]
          }
        ]
      },
      financial: {
        label: "Financial Stress",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Steadying Yourself",
            text: `<h2>🌱 Basic: Steadying Yourself</h2>
<p>Financial stress is one of the most common and least talked-about forms of stress. Money worries can feel relentless — affecting sleep, relationships, and self-worth. You're not alone, and your stress is completely valid.</p>
<h3>Immediate Emotional First Aid</h3>
<ul>
<li><strong>Breathe first</strong> — Financial panic triggers the same fight-or-flight response as physical danger. Before making any decisions, take 5 slow breaths. Decision-making under panic often makes things worse.</li>
<li><strong>Name what you're feeling</strong> — Shame? Fear? Overwhelm? Naming emotions activates the prefrontal cortex and reduces their intensity. This is called "affect labelling," backed by UCLA research.</li>
<li><strong>Separate your worth from your wealth</strong> — Your bank balance is not your value as a person. This is easier said than felt, but worth repeating to yourself throughout the day.</li>
</ul>
<h3>One Small Step</h3>
<ul>
<li>Rather than trying to solve everything at once, pick <em>one</em> thing you can do today — check a balance, cancel one subscription, or write down your three biggest expenses. Action reduces anxiety more than avoidance does.</li>
</ul>
<blockquote><em>"You can't calm the storm, so stop trying. What you can do is calm yourself. The storm will pass." — Timber Hawkeye</em></blockquote>`,
            qr: ["I'm avoiding looking at my finances", "I'm in debt", "I need practical budgeting help", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Practical Financial Clarity",
            text: `<h2>🌿 Intermediate: Practical Financial Clarity</h2>
<p>Clarity reduces anxiety. The uncertainty of "not knowing" your financial situation often causes more stress than the reality. These tools will help you get organised and take back control.</p>
<h3>The Budget Snapshot</h3>
<ul>
<li>Write down: monthly income vs. monthly essential expenses (rent, food, utilities, debt payments). What's left? This is your baseline.</li>
<li>Use the <strong>50/30/20 rule</strong> as a guide: 50% needs, 30% wants, 20% savings/debt. Adjust based on your reality.</li>
</ul>
<h3>Dealing with Debt</h3>
<ul>
<li><strong>Avalanche method</strong> — Pay minimums on all debts, put extra money toward the highest-interest debt first. Mathematically optimal.</li>
<li><strong>Snowball method</strong> — Pay off the smallest debt first. Psychologically motivating — wins build momentum.</li>
<li>If debt is overwhelming, contact your creditors. Most offer hardship arrangements.</li>
</ul>
<h3>Financial Stress vs. Avoidance</h3>
<ul>
<li>Many people avoid checking accounts or opening bills because it feels less painful. But avoidance increases anxiety over time. Set a weekly "money date" with yourself — 15 minutes to review finances calmly.</li>
</ul>
<blockquote><em>"It's not your salary that makes you rich; it's your spending habits." — Charles A. Jaffe</em></blockquote>`,
            qr: ["My debt feels unmanageable", "I have no savings at all", "I need to talk about financial shame", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: The Psychology of Money",
            text: `<h2>🔥 Advanced: The Psychology of Money</h2>
<p>Financial stress is rarely just about numbers. Our relationship with money is deeply psychological — shaped by childhood experiences, cultural messages, and emotional patterns. Understanding this can change everything.</p>
<h3>Money Scripts (Dr. Brad Klontz)</h3>
<ul>
<li>We all carry unconscious <strong>money scripts</strong> — inherited beliefs about money. Common ones: "Money is the root of all evil," "Rich people are greedy," "I don't deserve financial security," "More money = more happiness."</li>
<li>Identify which scripts you carry. Where did they come from? Are they serving you?</li>
</ul>
<h3>Financial Anxiety vs. Financial Avoidance</h3>
<ul>
<li>Financial anxiety leads to hypervigilance (checking balances obsessively) or paralysis (avoiding all financial decisions). CBT techniques — especially behavioural experiments — help break both patterns.</li>
</ul>
<h3>Scarcity Mindset (Mullainathan &amp; Shafir)</h3>
<ul>
<li>Research by Sendhil Mullainathan shows that financial scarcity literally narrows our cognitive bandwidth. This means people under financial stress make objectively worse decisions — not because of character, but because of mental load. This is important to understand without shame.</li>
</ul>
<h3>Practical CBT for Financial Stress</h3>
<ul>
<li>Identify: What is the catastrophic thought? (e.g. "I'll never get out of debt") → Challenge it: What's the evidence? What's the realistic best-case? → Create a balanced thought: "My situation is hard, but people in worse positions have turned it around."</li>
</ul>
<blockquote><em>"Wealth consists not in having great possessions, but in having few wants." — Epictetus</em></blockquote>`,
            qr: ["I recognise unhealthy money patterns", "I feel deep shame about money", "Financial stress is affecting my mental health", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Crisis, Debt & Professional Support",
            text: `<h2>💎 Pro: Crisis, Debt &amp; Professional Support</h2>
<p>When financial stress has become a genuine crisis — affecting your sleep, your relationships, your ability to function — it's time to seek professional help. This is not shameful. Financial crises are common, and there are people trained specifically to help.</p>
<h3>Signs You Need Professional Support</h3>
<ul>
<li>Financial stress is causing clinical anxiety or depression</li>
<li>You're unable to meet basic needs (food, housing)</li>
<li>You're considering or have considered self-harm related to financial shame</li>
<li>Debt feels completely unmanageable despite efforts</li>
</ul>
<h3>Financial Help Resources</h3>
<ul>
<li><strong>India</strong> — SEBI Investor Helpline: <code>1800 266 7575</code> | Many banks offer debt restructuring</li>
<li><strong>UK</strong> — StepChange Debt Charity: <code>0800 138 1111</code> | National Debtline: <code>0808 808 4000</code></li>
<li><strong>US</strong> — National Foundation for Credit Counseling: <code>1-800-388-2227</code></li>
<li><strong>Australia</strong> — National Debt Helpline: <code>1800 007 007</code></li>
</ul>
<h3>Mental Health Support</h3>
<ul>
<li>A therapist or counsellor can help address the anxiety, shame, and depression that financial stress often causes. CBT is particularly effective for financial anxiety.</li>
<li>If you're having thoughts of self-harm: India: <code>9152987821</code> | US: <code>988</code> | UK: <code>116 123</code> | Australia: <code>13 11 14</code></li>
</ul>
<blockquote><em>"Rock bottom became the solid foundation on which I rebuilt my life." — J.K. Rowling</em></blockquote>`,
            qr: ["I need professional help", "I'm having thoughts of self-harm"]
          }
        ]
      },
      general: {
        label: "General Stress",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: You're Allowed to Feel This",
            text: `<h2>🌱 Basic: You're Allowed to Feel This</h2>
<p>Sometimes stress doesn't have a clear label — it's just a feeling of being overwhelmed, stretched thin, or on edge. That's completely valid. You don't need to explain it to take care of yourself.</p>
<h3>Simple Things That Work Right Now</h3>
<ul>
<li><strong>5-4-3-2-1 Grounding</strong> — Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste. This pulls your attention out of your thoughts and back into the present.</li>
<li><strong>Move your body</strong> — Even 5 minutes of walking, stretching, or shaking your arms releases built-up tension. Stress is physiological — it needs a physical outlet.</li>
<li><strong>Self-compassion pause</strong> — Place a hand on your heart and say: "This is a moment of suffering. Suffering is part of life. May I be kind to myself right now." (From Dr. Kristin Neff's self-compassion research.)</li>
</ul>
<h3>Don't Minimise It</h3>
<ul>
<li>You may feel like your stress "isn't that bad" compared to others. But stress is not a competition. Your experience is real and it deserves attention.</li>
</ul>
<blockquote><em>"Even the darkest night will end, and the sun will rise." — Victor Hugo</em></blockquote>`,
            qr: ["I needed to hear that", "What else can I try?", "I feel this every day", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Building Your Stress Toolkit",
            text: `<h2>🌿 Intermediate: Building Your Stress Toolkit</h2>
<p>Managing generalised stress well means building a personalised toolkit — a set of strategies you can reach for before things escalate. Here's how to start.</p>
<h3>Identify Your Stress Patterns</h3>
<ul>
<li>Keep a simple stress log for one week: write the time, trigger, how you felt, and what you did. Patterns will emerge — and patterns can be changed.</li>
<li>Notice whether your stress is more <em>physical</em> (tension, headaches, stomach) or <em>mental</em> (racing thoughts, worry, rumination). Different types need different interventions.</li>
</ul>
<h3>Physical Regulation</h3>
<ul>
<li><strong>Progressive Muscle Relaxation (PMR)</strong> — Systematically tense and release each muscle group from toes to head. 15 minutes of PMR reduces cortisol measurably.</li>
<li>Regular aerobic exercise (even 20 minutes, 3 times/week) is one of the most evidence-backed stress reducers available.</li>
</ul>
<h3>Mental Regulation</h3>
<ul>
<li><strong>Mindfulness meditation</strong> — Even 10 minutes daily using apps like <code>Headspace</code>, <code>Calm</code>, or <code>Insight Timer</code> builds stress resilience over time. Effects accumulate.</li>
<li>Limit doomscrolling. News and social media are significant contributors to background stress levels.</li>
</ul>
<blockquote><em>"The greatest weapon against stress is our ability to choose one thought over another." — William James</em></blockquote>`,
            qr: ["I've tried mindfulness but my mind wanders", "I notice my body carries a lot of stress", "Is this anxiety?", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Stress Biology & Deep Patterns",
            text: `<h2>🔥 Advanced: Stress Biology &amp; Deep Patterns</h2>
<p>Understanding why your body and mind respond to stress the way they do — at a biological and psychological level — gives you more power to change it.</p>
<h3>The HPA Axis & Allostatic Load</h3>
<ul>
<li>Stress activates the Hypothalamic-Pituitary-Adrenal (HPA) axis, releasing cortisol. Short-term, this is adaptive. But chronic activation leads to <strong>allostatic load</strong> — wear and tear on the body and brain, affecting memory, immune function, and mood.</li>
<li>Practices that consistently down-regulate the HPA axis: yoga, tai chi, diaphragmatic breathing, social connection, and sleep.</li>
</ul>
<h3>ACT and Stress: The Two Arrows</h3>
<ul>
<li>In Buddhist-informed ACT, the first "arrow" is the stressor itself (unavoidable). The second "arrow" is our resistance, judgment, and struggle with the stress (avoidable). Much of our suffering comes from the second arrow.</li>
<li>Practice: Notice when you're not just stressed, but <em>stressed about being stressed</em>. That meta-layer is where ACT works.</li>
</ul>
<h3>Rumination vs. Reflection</h3>
<ul>
<li>Rumination (repetitive, passive negative thinking) prolongs stress. <em>Reflection</em> (active, purposeful problem-solving) resolves it. If your thinking is going in circles, that's rumination — and it needs interruption, not more thinking.</li>
</ul>
<blockquote><em>"You are the sky. Everything else is just the weather." — Pema Chödrön</em></blockquote>`,
            qr: ["I ruminate constantly", "My body feels wrecked from stress", "I think this is chronic stress", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Chronic Stress & Clinical Support",
            text: `<h2>💎 Pro: Chronic Stress &amp; Clinical Support</h2>
<p>If stress has been persistent for weeks or months — affecting your sleep, appetite, relationships, or ability to function — it may have crossed into clinical territory. That's not a personal failing. It's physiology, and it's treatable.</p>
<h3>Conditions to Consider</h3>
<ul>
<li><strong>Generalised Anxiety Disorder (GAD)</strong> — Persistent, excessive worry about multiple life areas, difficult to control, causing significant distress.</li>
<li><strong>Adjustment Disorder</strong> — A stress response to a specific life change that persists beyond what's expected.</li>
<li><strong>Burnout</strong> — WHO-recognised occupational syndrome with emotional exhaustion, depersonalisation, and reduced efficacy.</li>
<li><strong>PTSD / Complex PTSD</strong> — Stress stemming from past trauma. Trauma responses can masquerade as "general stress."</li>
</ul>
<h3>Professional Treatment Options</h3>
<ul>
<li>CBT — For anxiety and stress-related conditions. Highly effective, time-limited.</li>
<li>MBSR (Mindfulness-Based Stress Reduction) — 8-week structured programme with strong evidence for chronic stress.</li>
<li>Medication — SSRIs, SNRIs, or buspirone for anxiety. A GP or psychiatrist can advise.</li>
</ul>
<h3>Helplines</h3>
<ul>
<li>India: <code>9152987821</code> | US: <code>988</code> | UK: <code>116 123</code> | Australia: <code>13 11 14</code></li>
</ul>
<blockquote><em>"You don't have to carry this alone."</em></blockquote>`,
            qr: ["I need professional help", "How do I find a therapist?"]
          }
        ]
      }
    },
    subQR: ["Work / Academic stress", "Relationship stress", "Financial stress", "General / I'm not sure"]
  },

  // ─────────────────────────────────────────────
  // TOPIC 2: ANXIETY
  // ─────────────────────────────────────────────
  anxiety: {
    label: "anxiety",
    subtypes: {
      social: {
        label: "Social Anxiety",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: You Are Not Alone in This",
            text: `<h2>🌱 Basic: You Are Not Alone in This</h2>
<p>Social anxiety is far more common than most people realise — up to 13% of people will experience it at clinically significant levels. The feeling that everyone is watching and judging you, the dread before social events, the relief when they're cancelled — these are recognisable experiences for millions.</p>
<h3>In This Moment</h3>
<ul>
<li><strong>Slow your breathing</strong> — Anxiety makes us breathe faster, which makes us feel more anxious. Try 4 counts in, 6 counts out. The longer exhale activates the calming parasympathetic system.</li>
<li><strong>Shift your focus outward</strong> — Social anxiety creates a painful inward focus ("How am I coming across?"). Deliberately focus on something external — what the other person is saying, a detail in the room, the task at hand.</li>
</ul>
<h3>Remember</h3>
<ul>
<li>Most people are far too focused on themselves to be scrutinising you. This is called the <em>spotlight effect</em> — we overestimate how much others notice us.</li>
<li>Anxiety before social situations is normal. The goal is not to eliminate it, but to not let it control your choices.</li>
</ul>
<blockquote><em>"You alone are enough. You have nothing to prove to anybody." — Maya Angelou</em></blockquote>`,
            qr: ["I avoid social situations", "I overthink everything I say", "What is the spotlight effect?", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Practical Coping Strategies",
            text: `<h2>🌿 Intermediate: Practical Coping Strategies</h2>
<p>Social anxiety responds very well to structured strategies, particularly those that challenge avoidance patterns and unhelpful thinking.</p>
<h3>Challenging the Inner Critic</h3>
<ul>
<li>When you think "They think I'm boring," ask: "What's the evidence? What are alternative explanations?" This is <em>cognitive restructuring</em> — questioning thoughts rather than accepting them as facts.</li>
<li>Keep an evidence log: write down moments when social interactions went better than expected. Our brain has a negativity bias and ignores these.</li>
</ul>
<h3>Gradual Exposure (Approach, Don't Avoid)</h3>
<ul>
<li>Avoidance feels like relief but it strengthens anxiety long-term. Build a personal <em>exposure ladder</em>: rank social situations from least to most scary, and tackle them in order, starting with small wins.</li>
<li>Example: Making eye contact → Saying hello to a neighbour → Asking a question in a meeting → Attending a party.</li>
</ul>
<h3>Post-Event Processing</h3>
<ul>
<li>After social situations, people with social anxiety tend to replay everything that "went wrong." Counter this by writing 3 things that went okay or better than feared.</li>
</ul>
<blockquote><em>"Do one thing every day that scares you." — Eleanor Roosevelt</em></blockquote>`,
            qr: ["Avoidance is how I cope", "I freeze in social situations", "I want to understand the root of this", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: The Psychology of Social Anxiety",
            text: `<h2>🔥 Advanced: The Psychology of Social Anxiety</h2>
<p>Social anxiety is maintained by a cluster of interconnected psychological processes. Understanding them is the first step to dismantling them.</p>
<h3>The Clark &amp; Wells Model</h3>
<ul>
<li>The Clark-Wells cognitive model proposes that social anxiety is maintained by: excessive self-focused attention (monitoring yourself like an audience), safety behaviours (things we do to prevent imagined disasters, e.g. not making eye contact), and post-event rumination.</li>
<li>Paradoxically, <em>safety behaviours prevent disconfirmation</em> — they stop you from learning that your fears are exaggerated. Dropping safety behaviours is essential to recovery.</li>
</ul>
<h3>Self-Compassion as a Core Tool</h3>
<ul>
<li>Research by Dr. Kristin Neff shows that self-compassion (treating yourself with the kindness you'd offer a friend) directly reduces social anxiety. It breaks the threat-mode that drives hypervigilance.</li>
</ul>
<h3>Mindfulness-Based CBT</h3>
<ul>
<li>Mindfulness teaches you to observe anxious thoughts without being fused with them. "I notice I'm having the thought that everyone is judging me" is less distressing than "Everyone is judging me."</li>
</ul>
<blockquote><em>"Social anxiety is not a character flaw — it is a misfiring alarm system. And alarm systems can be recalibrated."</em></blockquote>`,
            qr: ["I use a lot of safety behaviours", "This is affecting my career", "I think I have SAD", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Social Anxiety Disorder & Treatment",
            text: `<h2>💎 Pro: Social Anxiety Disorder &amp; Treatment</h2>
<p>When social anxiety is persistent, severe, and significantly impairs your life — your career, relationships, or ability to carry out daily activities — it may meet the criteria for Social Anxiety Disorder (SAD), the most common anxiety disorder.</p>
<h3>Diagnostic Criteria (DSM-5)</h3>
<ul>
<li>Marked fear or anxiety about social situations where you might be scrutinised</li>
<li>Fear of acting in a way that will be embarrassing or humiliating</li>
<li>Social situations almost always provoke anxiety</li>
<li>Situations are avoided or endured with intense distress</li>
<li>Significantly interferes with work, social life, or relationships</li>
</ul>
<h3>Evidence-Based Treatments</h3>
<ul>
<li><strong>CBT with Exposure</strong> — Most effective treatment for SAD. Typically 12–16 sessions. Can be done in group format with even better outcomes for social anxiety specifically.</li>
<li><strong>Acceptance and Commitment Therapy (ACT)</strong> — Strong evidence for social anxiety.</li>
<li><strong>Medication</strong> — SSRIs (sertraline, escitalopram) or SNRIs are first-line. Beta-blockers for specific performance situations. Consult a psychiatrist.</li>
</ul>
<h3>Find Support</h3>
<ul>
<li>India: iCall <code>9152987821</code> | US: ADAA <code>adaa.org</code> | UK: Social Anxiety UK <code>social-anxiety.org.uk</code></li>
</ul>
<blockquote><em>"The life you want is on the other side of fear."</em></blockquote>`,
            qr: ["I need professional help", "Tell me about CBT for social anxiety"]
          }
        ]
      },
      performance: {
        label: "Performance Anxiety",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Calming the Pre-Performance Nerves",
            text: `<h2>🌱 Basic: Calming the Pre-Performance Nerves</h2>
<p>Whether it's a presentation, exam, sports event, or audition — performance anxiety is incredibly common. The good news is that some of what feels like "anxiety" is actually arousal that can be redirected.</p>
<h3>Right Before a Performance</h3>
<ul>
<li><strong>Reframe the nerves</strong> — Tell yourself: "I am excited." Research by Alison Wood Brooks (Harvard) shows that saying "I am excited" before a performance leads to measurably better outcomes than trying to "calm down." The physical state is nearly identical — the meaning changes.</li>
<li><strong>Power posing (briefly)</strong> — Standing in an open, expansive posture (arms wide, chest open) for 2 minutes before a performance reduces cortisol and increases confidence. Find a private spot and try it.</li>
<li><strong>Focus on the task, not the outcome</strong> — Process goals ("I will speak clearly") are more effective than outcome goals ("I must impress them") for performance anxiety.</li>
</ul>
<blockquote><em>"It's not about being fearless. It's about performing in spite of fear."</em></blockquote>`,
            qr: ["I freeze under pressure", "I overthink my performance", "This happens every time", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Building Performance Resilience",
            text: `<h2>🌿 Intermediate: Building Performance Resilience</h2>
<p>Performance anxiety typically has two components: physiological (racing heart, sweating) and cognitive (negative self-talk, catastrophic thinking). Addressing both is key.</p>
<h3>Cognitive Techniques</h3>
<ul>
<li><strong>Defusion</strong> — Instead of "I'm going to fail," try "I'm having the thought that I'm going to fail." This creates distance from the thought.</li>
<li><strong>If-then planning</strong> — "If I forget my words, then I will pause, take a breath, and find my place." Having a plan for worst cases reduces anxiety about them.</li>
</ul>
<h3>Physical Preparation</h3>
<ul>
<li>Rehearsal reduces anxiety by making the performance feel familiar. The more you simulate the real conditions, the less novel (and threatening) they feel.</li>
<li><strong>Systematic desensitisation</strong> — Gradually expose yourself to increasingly realistic versions of the performance. Imaginal → small audience → real performance.</li>
</ul>
<h3>Recovery Rituals</h3>
<ul>
<li>Athletes use pre-performance rituals to anchor confidence. Develop your own — a phrase, a gesture, a song. Consistency builds a conditioned response.</li>
</ul>
<blockquote><em>"Preparation is the best cure for performance anxiety."</em></blockquote>`,
            qr: ["I have an important event coming up", "My anxiety is ruining my performance", "I think I have imposter syndrome", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Flow, Imposter Syndrome & Identity",
            text: `<h2>🔥 Advanced: Flow, Imposter Syndrome &amp; Identity</h2>
<p>Deeper performance anxiety often connects to identity ("my worth depends on how I perform") and imposter syndrome. Let's examine these roots.</p>
<h3>Imposter Syndrome</h3>
<ul>
<li>First described by psychologists Clance &amp; Imes (1978), imposter syndrome involves persistent belief that you are a fraud who will be "found out," despite evidence of competence.</li>
<li>It's linked to perfectionism and is especially common in high-achievers. The antidote is not more achievement — it's developing an identity that isn't contingent on performance.</li>
</ul>
<h3>Flow State (Csikszentmihalyi)</h3>
<ul>
<li>Flow occurs when challenge and skill are perfectly matched. Performance anxiety often comes from perceived challenge far exceeding perceived skill. Building genuine skill reduces the gap — and the anxiety.</li>
<li>Anxiety lives in the future. Flow lives in the present. Mindfulness practices increase access to flow states.</li>
</ul>
<h3>Separating Worth from Performance</h3>
<ul>
<li>Ask: "If I performed terribly today, what would that actually mean about me?" Often, our catastrophic predictions reveal an underlying belief: "I am only valuable if I perform well." This is a core belief that therapy can address effectively.</li>
</ul>
<blockquote><em>"You are not your performance. You are the one who shows up to perform."</em></blockquote>`,
            qr: ["I strongly identify with my performance", "I think I have imposter syndrome", "Flow sounds amazing — how do I get there?", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Clinical Performance Anxiety & Treatment",
            text: `<h2>💎 Pro: Clinical Performance Anxiety &amp; Treatment</h2>
<p>When performance anxiety is so severe that it causes avoidance of important opportunities, significantly impairs quality of life, or creates physical symptoms (severe trembling, nausea, panic attacks) it may warrant professional intervention.</p>
<h3>Related Clinical Conditions</h3>
<ul>
<li><strong>Specific Performance Phobia</strong> — An anxiety disorder specific to performance contexts.</li>
<li><strong>Social Anxiety Disorder with performance specifier</strong> — Anxiety specifically triggered by performance situations.</li>
<li><strong>Panic Disorder</strong> — If performance anxiety consistently triggers panic attacks.</li>
</ul>
<h3>Treatment Options</h3>
<ul>
<li><strong>CBT with Exposure</strong> — Systematic exposure to feared performance situations, with cognitive restructuring of perfectionist and shame-based beliefs.</li>
<li><strong>EMDR</strong> — Particularly helpful if performance anxiety is rooted in a past humiliating experience.</li>
<li><strong>Beta-blockers</strong> — Propranolol blocks the physical symptoms (racing heart, trembling) without sedation. Used situationally by many professional performers. Discuss with a GP.</li>
<li><strong>Performance coaching combined with therapy</strong> — Many sports psychologists and performance coaches specialise in this area.</li>
</ul>
<h3>Resources</h3>
<ul>
<li>India: iCall <code>9152987821</code> | UK: BACP therapist finder <code>bacp.co.uk</code> | US: <code>psychologytoday.com</code></li>
</ul>
<blockquote><em>"Courage is not the absence of fear — it's taking the stage anyway."</em></blockquote>`,
            qr: ["I need professional help", "Tell me about beta-blockers for anxiety"]
          }
        ]
      },
      health: {
        label: "Health Anxiety",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Your Worry Is Real, Even If the Illness Isn't",
            text: `<h2>🌱 Basic: Your Worry Is Real, Even If the Illness Isn't</h2>
<p>Health anxiety — the persistent worry that you have or might develop a serious illness — is a real and distressing condition. It's not "being a hypochondriac." It's your threat-detection system misfiring, and your suffering is completely valid.</p>
<h3>Right Now</h3>
<ul>
<li><strong>Step away from Dr. Google</strong> — Searching symptoms almost always increases health anxiety. Web searches are designed to surface dramatic possibilities. For most symptoms, the mundane explanation is most likely. Commit to not searching for 24 hours.</li>
<li><strong>Grounding</strong> — When anxiety spikes, do the 5-4-3-2-1 technique: 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.</li>
<li><strong>Remember</strong> — Anxiety itself causes physical symptoms: chest tightness, dizziness, shortness of breath, tingling. Many health anxiety sufferers are feeling real physical sensations — caused by anxiety.</li>
</ul>
<blockquote><em>"The body keeps score, but it's not always reporting accurately."</em></blockquote>`,
            qr: ["I can't stop Googling symptoms", "I feel physical symptoms constantly", "I've had tests but still worry", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Breaking the Reassurance Cycle",
            text: `<h2>🌿 Intermediate: Breaking the Reassurance Cycle</h2>
<p>Health anxiety is maintained by a cycle: worry → check/reassure → brief relief → more worry. Breaking this cycle is essential.</p>
<h3>Understanding the Cycle</h3>
<ul>
<li>Reassurance (from doctors, from Google, from loved ones) provides temporary relief but <em>reinforces</em> the belief that checking is necessary. It teaches the brain: "The danger was real enough to check."</li>
<li>Body-checking (examining a mole, pressing on a lump, monitoring your pulse) similarly maintains rather than reduces anxiety.</li>
</ul>
<h3>Practical Steps</h3>
<ul>
<li>Keep a <strong>worry diary</strong>: write the worry, the physical sensation, what you did (check, Google, ask someone), and whether anxiety decreased or increased. Most people are surprised to see the pattern.</li>
<li>Set a "worry window" — 15 minutes a day when you allow yourself to worry deliberately. Outside that window, postpone all health worries to the window.</li>
</ul>
<h3>Tolerating Uncertainty</h3>
<ul>
<li>Health anxiety is, at its core, an intolerance of uncertainty. There is no certainty in health. The goal is to build tolerance for "I don't know, and I'm okay anyway."</li>
</ul>
<blockquote><em>"Worrying does not empty tomorrow of its troubles. It empties today of its strength." — Corrie ten Boom</em></blockquote>`,
            qr: ["I seek reassurance constantly", "My doctor says I'm fine but I don't believe it", "This is taking over my life", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: CBT for Health Anxiety",
            text: `<h2>🔥 Advanced: CBT for Health Anxiety</h2>
<p>Health anxiety (formerly called hypochondria, now often called Illness Anxiety Disorder or Somatic Symptom Disorder) is one of the anxiety conditions that responds best to CBT. Understanding the mechanisms makes the treatment make sense.</p>
<h3>Catastrophic Misinterpretation of Bodily Sensations</h3>
<ul>
<li>The core CBT model for health anxiety involves identifying how benign bodily sensations are catastrophically misinterpreted (e.g., "heartbeat = heart attack").</li>
<li>Maintenance factors: selective attention to the body, reassurance-seeking, avoidance (of medical shows, hospitals, conversations about illness), and body-checking.</li>
</ul>
<h3>Behavioural Experiments</h3>
<ul>
<li>A CBT therapist might suggest testing a prediction: "If I don't check my pulse for one hour, what happens?" The aim is to gather evidence that the feared outcome doesn't occur, and that anxiety reduces over time without checking.</li>
</ul>
<h3>Attention Training</h3>
<ul>
<li>Deliberately broadening your attentional focus away from bodily sensations reduces their salience. Mindfulness supports this — not by eliminating body awareness, but by observing without reacting.</li>
</ul>
<h3>Disgust &amp; Contamination</h3>
<ul>
<li>Some health anxiety has a disgust/contamination flavour. This overlaps with OCD and benefits from ERP (Exposure and Response Prevention) techniques.</li>
</ul>
<blockquote><em>"Anxiety is the dizziness of freedom — but you can learn to walk straight."</em></blockquote>`,
            qr: ["I relate to the CBT model", "Could this be OCD?", "I can't engage in activities I love", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Illness Anxiety Disorder & Professional Help",
            text: `<h2>💎 Pro: Illness Anxiety Disorder &amp; Professional Help</h2>
<p>When health worry becomes all-consuming, significantly impacts your daily life, and persists despite reassurance or negative medical tests, it may meet the criteria for a clinical condition that deserves proper treatment.</p>
<h3>Relevant Diagnoses</h3>
<ul>
<li><strong>Illness Anxiety Disorder (IAD)</strong> — Preoccupation with having or acquiring a serious illness, despite minimal somatic symptoms. High reassurance-seeking.</li>
<li><strong>Somatic Symptom Disorder (SSD)</strong> — Real physical symptoms accompanied by excessive thoughts and behaviours related to those symptoms.</li>
<li><strong>OCD with health-themed obsessions</strong> — Compulsive checking and reassurance-seeking as rituals.</li>
</ul>
<h3>Evidence-Based Treatment</h3>
<ul>
<li><strong>CBT with Behavioural Experiments and ERP</strong> — Most evidence-based treatment for IAD/SSD. 12–16 sessions typically.</li>
<li><strong>ACT</strong> — Helps with building tolerance for uncertainty and reducing avoidance.</li>
<li><strong>SSRIs</strong> — Sertraline and fluoxetine have evidence for health anxiety and OCD-spectrum presentations. A psychiatrist can assess.</li>
</ul>
<h3>Find Support</h3>
<ul>
<li>UK: <code>ocduk.org</code> | US: ADAA <code>adaa.org</code> | India: iCall <code>9152987821</code></li>
</ul>
<blockquote><em>"You deserve to live fully, not just safely."</em></blockquote>`,
            qr: ["I need professional help", "Could I have OCD?"]
          }
        ]
      },
      general: {
        label: "General Anxiety",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Anxiety Is Not Your Enemy",
            text: `<h2>🌱 Basic: Anxiety Is Not Your Enemy</h2>
<p>Anxiety is your brain's threat-detection system. At low levels, it's useful — it sharpens focus, motivates preparation. It only becomes a problem when it fires too often or too intensely. You're not broken. Your alarm is just sensitive.</p>
<h3>Right Now</h3>
<ul>
<li><strong>Physiological sigh</strong> — Two quick inhales through the nose, then a long exhale through the mouth. This is the fastest evidence-based way to calm your nervous system. Andrew Huberman's research at Stanford identifies this as the most effective immediate anxiety reducer.</li>
<li><strong>Cold water on your face</strong> — Splashing cold water triggers the dive reflex, which slows heart rate. A simple, fast body-based reset.</li>
<li><strong>Name it</strong> — "I am feeling anxious right now, and that's okay." Labelling emotions reduces their intensity by 30–40% according to UCLA research (Lieberman et al.).</li>
</ul>
<h3>Remember</h3>
<ul>
<li>Anxiety always passes. You've survived every anxious moment so far. Your body cannot maintain peak anxiety indefinitely — it naturally comes down.</li>
</ul>
<blockquote><em>"Anxiety is the partner of creativity and the handmaiden of art." — T.S. Eliot</em></blockquote>`,
            qr: ["I feel anxious all the time", "I have panic attacks", "What can I do about worry?", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Managing the Worry Habit",
            text: `<h2>🌿 Intermediate: Managing the Worry Habit</h2>
<p>Persistent anxiety is largely maintained by the habit of worry — turning problems over and over without resolution. Here's how to interrupt that loop.</p>
<h3>Constructive Worry</h3>
<ul>
<li>Set a <strong>scheduled worry time</strong> — 20 minutes each day, same time. When a worry arises outside that time, write it down and tell yourself "I'll think about that at 5pm." This sounds too simple, but research shows it significantly reduces overall worry time.</li>
<li>During worry time: for each worry, ask "Is this something I can act on?" If yes — make one concrete plan. If no — it's a hypothetical worry. Practice letting it go.</li>
</ul>
<h3>The STOPP Technique</h3>
<ul>
<li><strong>S</strong>top — pause what you're doing</li>
<li><strong>T</strong>ake a breath</li>
<li><strong>O</strong>bserve — what am I thinking/feeling/doing?</li>
<li><strong>P</strong>ull back — what's the bigger picture? What would someone else see?</li>
<li><strong>P</strong>ractise what works — what's the best thing to do right now?</li>
</ul>
<h3>Lifestyle Foundations</h3>
<ul>
<li>Sleep, exercise, and caffeine reduction are among the most powerful anxiety interventions. Caffeine is a significant anxiety amplifier — even 2–3 cups daily can worsen baseline anxiety markedly.</li>
</ul>
<blockquote><em>"Worry is like a rocking chair: it gives you something to do but never gets you anywhere." — Erma Bombeck</em></blockquote>`,
            qr: ["I can't stop worrying", "I have physical anxiety symptoms", "Could I have GAD?", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: The Psychology of Anxiety Disorders",
            text: `<h2>🔥 Advanced: The Psychology of Anxiety Disorders</h2>
<p>Understanding the psychological mechanisms that maintain anxiety gives you far more power to address it at the root level.</p>
<h3>The Role of Avoidance</h3>
<ul>
<li>Avoidance is the central maintenance mechanism in all anxiety disorders. It provides relief in the short term but teaches the brain "that situation was genuinely dangerous" — making the next encounter more threatening.</li>
<li>Counter-intuitively, <em>approaching</em> feared situations (with appropriate support) is the most effective long-term strategy.</li>
</ul>
<h3>Intolerance of Uncertainty (IU)</h3>
<ul>
<li>GAD and many anxiety disorders are driven by a low tolerance for not knowing. Research shows that people with high IU treat uncertainty as threatening regardless of its actual content.</li>
<li>Behavioural experiments to build IU: deliberately engage with small uncertainties (ordering something new at a restaurant, taking a different route) to strengthen the tolerance muscle.</li>
</ul>
<h3>The Metacognitive Model (Wells)</h3>
<ul>
<li>Adrian Wells' metacognitive model identifies that it's not just the content of worries but our <em>beliefs about worry</em> that maintain anxiety. Beliefs like "worrying keeps me safe" or "I can't control my worry" are targets for treatment.</li>
</ul>
<blockquote><em>"Anxiety is love's greatest killer. It makes others feel as you might when a drowning man holds on to you." — Anaïs Nin</em></blockquote>`,
            qr: ["I use a lot of avoidance", "I worry about worrying", "I think I might have GAD", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Generalised Anxiety Disorder & Clinical Help",
            text: `<h2>💎 Pro: Generalised Anxiety Disorder &amp; Clinical Help</h2>
<p>When anxiety is persistent, pervasive, difficult to control, and causes significant distress or impairment — it may meet criteria for Generalised Anxiety Disorder (GAD) or another anxiety disorder. This deserves proper assessment and treatment.</p>
<h3>GAD Criteria (DSM-5)</h3>
<ul>
<li>Excessive anxiety and worry about multiple topics, more days than not, for at least 6 months</li>
<li>Difficulty controlling the worry</li>
<li>Associated with 3+ of: restlessness, fatigue, concentration difficulties, irritability, muscle tension, sleep disturbance</li>
<li>Significant distress or functional impairment</li>
</ul>
<h3>Evidence-Based Treatments</h3>
<ul>
<li><strong>CBT for GAD</strong> — Addresses worry patterns, intolerance of uncertainty, metacognitive beliefs, and avoidance. Most supported treatment. 12–16 sessions.</li>
<li><strong>Metacognitive Therapy (MCT)</strong> — Adrian Wells' specific protocol for GAD. Growing evidence base.</li>
<li><strong>Medication</strong> — SSRIs (sertraline, escitalopram), SNRIs (venlafaxine), or buspirone. Long-term management under psychiatric supervision.</li>
</ul>
<h3>Resources</h3>
<ul>
<li>India: iCall <code>9152987821</code> | US: <code>adaa.org</code> | UK: Anxiety UK <code>0344 477 5774</code> | Australia: Beyond Blue <code>1300 22 4636</code></li>
</ul>
<blockquote><em>"You are braver than you believe, stronger than you seem, and smarter than you think." — A.A. Milne</em></blockquote>`,
            qr: ["I need professional help", "How do I talk to my doctor about anxiety?"]
          }
        ]
      }
    },
    subQR: ["Social anxiety", "Performance anxiety", "Health anxiety", "General anxiety / I'm not sure"]
  },

  // ─────────────────────────────────────────────
  // TOPIC 3: SADNESS
  // ─────────────────────────────────────────────
  sadness: {
    label: "sadness",
    subtypes: {
      grief: {
        label: "Grief / Loss",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Grief Is Love With Nowhere to Go",
            text: `<h2>🌱 Basic: Grief Is Love With Nowhere to Go</h2>
<p>Grief is one of the most profound human experiences. Whether you've lost a person, a relationship, a role, a home, or a dream — your loss is real and your grief is valid. There is no right way to grieve, and no timeline you must follow.</p>
<h3>Right Now</h3>
<ul>
<li><strong>Let yourself feel</strong> — Grief asks to be felt, not fixed. Trying to push it away prolongs it. When the wave comes, allow it. Cry if you need to. Grief moves through you when you don't resist it.</li>
<li><strong>Basic self-care</strong> — Eat something small. Drink water. If you can, step outside for a few minutes. Grief is held in the body — small physical acts of care matter.</li>
<li><strong>Reach out to one person</strong> — You don't have to be alone with this. Send a message to someone who knew your loved one, or someone who cares about you. Connection is healing.</li>
</ul>
<h3>Remember</h3>
<ul>
<li>Grief is not linear. Kübler-Ross's five stages (denial, anger, bargaining, depression, acceptance) were never meant to be a checklist — many people experience them in no particular order, repeatedly, or not at all.</li>
</ul>
<blockquote><em>"Grief is the price we pay for love." — Queen Elizabeth II</em></blockquote>`,
            qr: ["My grief comes and goes in waves", "I feel numb, not sad", "I'm grieving a pet / relationship / loss that others minimise", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Navigating Grief Over Time",
            text: `<h2>🌿 Intermediate: Navigating Grief Over Time</h2>
<p>As immediate shock fades, grief can evolve into a complex mix of sadness, anger, guilt, relief, and longing. Understanding this can help you navigate it with more self-compassion.</p>
<h3>The Dual Process Model (Stroebe &amp; Schut)</h3>
<ul>
<li>This evidence-based model describes healthy grieving as oscillating between <em>loss-oriented coping</em> (crying, thinking about the person, feeling sad) and <em>restoration-oriented coping</em> (distraction, positive experiences, life rebuilding).</li>
<li>Feeling okay in the morning and devastated by evening isn't inconsistency — it's healthy oscillation. Don't guilt yourself for moments of joy.</li>
</ul>
<h3>Continuing Bonds Theory</h3>
<ul>
<li>Modern grief research (Klass, Silverman, Nickman) suggests that maintaining an ongoing relationship with the deceased through memory, ritual, and inner conversation is healthy — not a sign of "not letting go."</li>
</ul>
<h3>Practical Support</h3>
<ul>
<li>Consider a grief support group — shared experience with others who understand is often more comforting than professional support alone.</li>
<li>Rituals can help: lighting a candle on significant dates, writing letters, keeping a memory box.</li>
</ul>
<blockquote><em>"The reality is that you will grieve forever. You will not 'get over' the loss of a loved one; you will learn to live with it." — Elizabeth Kübler-Ross</em></blockquote>`,
            qr: ["I feel guilty for feeling okay sometimes", "My grief feels complicated or stuck", "How do I support others while grieving?", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Complicated Grief & Meaning-Making",
            text: `<h2>🔥 Advanced: Complicated Grief &amp; Meaning-Making</h2>
<p>For some people, grief does not follow the expected trajectory and becomes "complicated" or "prolonged." Understanding this — and the psychology of meaning-making — is important.</p>
<h3>Prolonged Grief Disorder (PGD)</h3>
<ul>
<li>PGD was added to DSM-5-TR in 2022. It involves intense longing for the deceased, difficulty accepting the death, bitterness, and significant impairment in functioning — persisting beyond 12 months (6 months in children).</li>
<li>Risk factors include traumatic or sudden death, loss of a child, pre-existing depression or anxiety, and lack of social support.</li>
</ul>
<h3>Meaning-Making (Neimeyer)</h3>
<ul>
<li>Dr. Robert Neimeyer's research shows that the central challenge in grief is <em>meaning-making</em> — reconstructing a world that makes sense after a loss that has shattered one's assumptions. Narrative therapy approaches grief as reauthoring your life story.</li>
</ul>
<h3>Trauma-Informed Grief Work</h3>
<ul>
<li>If the death was traumatic (sudden, violent, suicide), grief may be complicated by PTSD. The trauma responses need to be addressed alongside, and sometimes before, the grief work.</li>
</ul>
<blockquote><em>"The dark does not destroy the light; it defines it." — Brené Brown</em></blockquote>`,
            qr: ["I think my grief is complicated", "The death was traumatic", "I can't find meaning", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Seeking Support for Grief",
            text: `<h2>💎 Pro: Seeking Support for Grief</h2>
<p>Grief can sometimes lead to clinical depression, PTSD, or prolonged grief disorder. If your grief is significantly impairing your ability to function, or you're having thoughts of self-harm or not wanting to be alive, please reach out for professional support.</p>
<h3>Types of Professional Grief Support</h3>
<ul>
<li><strong>Grief Counselling / Bereavement Therapy</strong> — Specialised support for loss. Many hospices and charities offer this free.</li>
<li><strong>Complicated Grief Treatment (CGT)</strong> — A manualised therapy developed by Shear et al. for Prolonged Grief Disorder. Highly effective.</li>
<li><strong>EMDR</strong> — For grief with traumatic elements.</li>
<li><strong>CBT for Depression</strong> — If grief has triggered a depressive episode.</li>
</ul>
<h3>If You're Having Thoughts of Self-Harm</h3>
<ul>
<li>Grief can trigger thoughts of wanting to die or be with the person who has died. These thoughts deserve immediate support.</li>
<li>India: Vandrevala Foundation <code>1860-2662-345</code> (24/7) | iCall <code>9152987821</code></li>
<li>US: 988 Lifeline: <code>988</code> | Crisis Text Line: text HOME to <code>741741</code></li>
<li>UK: Samaritans <code>116 123</code> | CRUSE Bereavement <code>0808 808 1677</code></li>
<li>Australia: Lifeline <code>13 11 14</code> | GriefLine <code>1300 845 745</code></li>
</ul>
<blockquote><em>"You don't have to face this alone. Help is always available."</em></blockquote>`,
            qr: ["I need professional help", "I'm having thoughts of self-harm"]
          }
        ]
      },
      loneliness: {
        label: "Loneliness",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Loneliness Is a Signal, Not a Verdict",
            text: `<h2>🌱 Basic: Loneliness Is a Signal, Not a Verdict</h2>
<p>Loneliness is one of the most painful human emotions — and one of the most common. Feeling deeply alone, even in the presence of others, doesn't mean something is wrong with you. It means your need for connection isn't being met right now. And needs can be met.</p>
<h3>Right Now</h3>
<ul>
<li><strong>Reach out to one person</strong> — Not to explain your loneliness, just to connect. Send a meme. Ask how they are. Even brief digital contact activates connection circuits in the brain.</li>
<li><strong>Be your own company</strong> — When alone, treat yourself as a guest you care about. Make a cup of tea, put on music you love, do something you enjoy. Self-companionship is a learnable skill.</li>
<li><strong>Acknowledge it without shame</strong> — Loneliness carries social stigma that makes it worse. Say to yourself: "I feel lonely, and many millions of people feel this too. It's human. It doesn't mean I'm unlovable."</li>
</ul>
<blockquote><em>"The eternal quest of the individual human being is to shatter his loneliness." — Norman Cousins</em></blockquote>`,
            qr: ["I feel lonely even around people", "I've moved somewhere new", "I find it hard to make friends", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Building Connection",
            text: `<h2>🌿 Intermediate: Building Connection</h2>
<p>Loneliness often persists not because connection is unavailable, but because our expectations, fears, or habits make it harder to initiate. These evidence-based strategies help build real connection.</p>
<h3>The Paradox of Belonging</h3>
<ul>
<li>Research by Dr. Julianne Holt-Lunstad shows loneliness is as harmful to health as smoking 15 cigarettes a day. But it also shows that quality matters more than quantity — one or two deep connections protect us far better than dozens of superficial ones.</li>
</ul>
<h3>Practical Connection Steps</h3>
<ul>
<li>Join a group activity you find intrinsically interesting — book clubs, running groups, classes, volunteering. Shared activity is a natural context for connection without the pressure of direct socialising.</li>
<li>Practice <em>weak tie activation</em> — chatting to a barista, a neighbour, the person at the gym. Research shows these small interactions meaningfully reduce loneliness.</li>
<li>Reciprocate. Loneliness can create a withdrawal reflex. Commit to responding when people reach out, even when you don't feel like it.</li>
</ul>
<h3>Online Community</h3>
<ul>
<li>For those with niche interests or social anxiety, online communities can be genuinely connective. Platforms like Discord, Reddit communities, or interest-based forums provide a lower-stakes entry point.</li>
</ul>
<blockquote><em>"Connection is the energy that is created between people when they feel seen, heard, and valued." — Brené Brown</em></blockquote>`,
            qr: ["I've tried to connect but it doesn't work", "I feel like no one understands me", "I'm scared of rejection", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: The Psychology of Loneliness",
            text: `<h2>🔥 Advanced: The Psychology of Loneliness</h2>
<p>Chronic loneliness is not just a social problem — it's a psychological pattern with cognitive, emotional, and neurological components. Understanding it helps break the cycle.</p>
<h3>The Loneliness Loop (Cacioppo)</h3>
<ul>
<li>Pioneering researcher John Cacioppo showed that loneliness creates a hypervigilance to social threat. Lonely people become more sensitive to rejection and negative social cues, leading to withdrawal that paradoxically deepens loneliness.</li>
<li>The implication: loneliness alters perception. Social situations may feel more threatening than they are.</li>
</ul>
<h3>Attachment and Loneliness</h3>
<ul>
<li>Avoidant attachment often presents as "I prefer to be alone" — but research suggests this frequently masks loneliness that feels too vulnerable to acknowledge. Reconnecting with the desire for connection is therapeutic in itself.</li>
</ul>
<h3>Self-Disclosure and Intimacy</h3>
<ul>
<li>Social psychologist Arthur Aron's "36 Questions" research shows that mutual, escalating self-disclosure creates closeness. The willingness to be known — vulnerably, honestly — is the engine of intimacy.</li>
</ul>
<blockquote><em>"We are most ourselves when we are most connected to others." — John Cacioppo</em></blockquote>`,
            qr: ["I feel like I can't let people in", "Loneliness is making me depressed", "Is there a therapy for loneliness?", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Chronic Loneliness & Mental Health",
            text: `<h2>💎 Pro: Chronic Loneliness &amp; Mental Health</h2>
<p>Chronic loneliness can lead to or significantly worsen clinical depression, anxiety, and other mental health conditions. If loneliness is persistent, severe, and affecting your ability to function, please consider professional support.</p>
<h3>Clinical Considerations</h3>
<ul>
<li>Loneliness is associated with increased risk of depression, anxiety, dementia, cardiovascular disease, and all-cause mortality.</li>
<li>When loneliness and depression co-occur, both need treatment. Treating only one often doesn't resolve the other.</li>
<li>Social skills training, offered by some therapists, can help people who find connection genuinely difficult.</li>
</ul>
<h3>Professional Support Options</h3>
<ul>
<li><strong>Individual therapy</strong> — Explores the roots of loneliness, attachment fears, social anxiety, and helps develop connection skills.</li>
<li><strong>Group therapy</strong> — Particularly well-suited for loneliness — provides a direct relational environment as part of treatment.</li>
<li><strong>Structured social skills programmes</strong> — Available through many community mental health services.</li>
</ul>
<h3>Crisis Resources</h3>
<ul>
<li>If loneliness has led to thoughts of self-harm: India <code>9152987821</code> | US <code>988</code> | UK <code>116 123</code> | Australia <code>13 11 14</code></li>
</ul>
<blockquote><em>"You are never alone. Reach out — even one connection can change everything."</em></blockquote>`,
            qr: ["I need professional help", "Loneliness is making me feel hopeless"]
          }
        ]
      },
      breakup: {
        label: "Heartbreak / Breakup",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Your Heart Is Not Broken — It Is Breaking Open",
            text: `<h2>🌱 Basic: Your Heart Is Not Broken — It Is Breaking Open</h2>
<p>Heartbreak is one of the most physically painful emotional experiences there is — brain imaging shows that the pain of rejection activates the same neural pathways as physical pain. What you're feeling is real, it is significant, and you deserve compassion.</p>
<h3>Right Now</h3>
<ul>
<li><strong>Feel it, don't flee it</strong> — The urge to numb (with alcohol, scrolling, rebound relationships, or obsessive busyness) is understandable but delays healing. Allow yourself to grieve.</li>
<li><strong>Physical comfort first</strong> — Eat something warm. Wrap yourself in a blanket. Call someone who cares about you. The body needs care right now.</li>
<li><strong>No contact (for now)</strong> — Checking their social media, rereading old messages, or repeatedly reaching out prolongs the pain. Every peek restarts the attachment cycle. A temporary digital break is an act of self-love.</li>
</ul>
<blockquote><em>"The emotion that can break your heart is sometimes the very one that heals it." — Nicholas Sparks</em></blockquote>`,
            qr: ["I can't stop thinking about them", "I keep checking their social media", "Should I reach out?", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: The Healing Process",
            text: `<h2>🌿 Intermediate: The Healing Process</h2>
<p>Healing from heartbreak isn't linear, but it is predictable. Understanding what's happening neurologically and psychologically can make the process less frightening.</p>
<h3>The Neuroscience of Heartbreak</h3>
<ul>
<li>Love activates dopamine and oxytocin pathways. A breakup is, neurologically, a form of withdrawal. The craving, obsession, and physical discomfort are real addiction-like processes — not weakness.</li>
<li>Knowing this helps: your brain is seeking its "fix," not truth. The pain will diminish as those neural pathways rebuild.</li>
</ul>
<h3>Stages of Recovery</h3>
<ul>
<li>Acute grief → Intrusive thoughts → Gradual acceptance → Identity rebuilding. Most people begin to feel meaningfully better between 3–6 months — though this varies enormously.</li>
</ul>
<h3>Practical Healing Steps</h3>
<ul>
<li>Reconnect with your pre-relationship self: hobbies, friendships, goals you put aside.</li>
<li>Write a letter to your future self about who you want to become.</li>
<li>Resist idealising the relationship — make a list of genuine difficulties and incompatibilities alongside the good.</li>
</ul>
<blockquote><em>"Hearts are breakable. And I think even when you heal, you're never what you were before." — Cassandra Clare</em></blockquote>`,
            qr: ["I keep idealising them", "I'm angry as well as sad", "Will I always feel this way?", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Identity, Attachment & Growth",
            text: `<h2>🔥 Advanced: Identity, Attachment &amp; Growth</h2>
<p>The depth of heartbreak often reflects both the significance of the relationship and the extent to which our identity had become entwined with it. Working with this consciously is how growth happens.</p>
<h3>Relationship-Self Overlap (Aron)</h3>
<ul>
<li>Psychologist Arthur Aron's research shows that in close relationships, we incorporate our partner into our sense of self. Breakup is therefore a partial loss of self — not just a loss of them. This is why it can feel like an identity crisis.</li>
</ul>
<h3>Post-Traumatic Growth</h3>
<ul>
<li>Research by Tedeschi &amp; Calhoun shows that many people report significant positive change following heartbreak — greater self-knowledge, deeper values, stronger resilience. This doesn't minimise the pain but situates it in a larger narrative.</li>
</ul>
<h3>Attachment Patterns Post-Breakup</h3>
<ul>
<li>If you're experiencing intense panic, obsessive pursuit, or a complete emotional shutdown after the breakup, this may reflect your attachment style. Anxious attachment often involves protest behaviours (constant contact attempts). Avoidant attachment may look like sudden coldness. Understanding your pattern is the first step to changing it.</li>
</ul>
<blockquote><em>"Sometimes the most loving thing you can do is let something go."</em></blockquote>`,
            qr: ["I feel like I've lost my identity", "I keep repeating the same relationship patterns", "I want to grow from this", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: When Heartbreak Becomes a Crisis",
            text: `<h2>💎 Pro: When Heartbreak Becomes a Crisis</h2>
<p>For some people, heartbreak can trigger clinical depression, acute anxiety, or in extreme cases, thoughts of self-harm. If this is where you are, please know that what you're feeling is real, it is treatable, and help is available right now.</p>
<h3>Warning Signs</h3>
<ul>
<li>Inability to eat, sleep, or function for more than 2 weeks</li>
<li>Thoughts of self-harm, or wishing you wouldn't wake up</li>
<li>Engaging in self-destructive behaviours (substance use, reckless behaviour)</li>
<li>Total withdrawal from all social contact</li>
</ul>
<h3>Professional Support</h3>
<ul>
<li><strong>Individual therapy</strong> — CBT, schema therapy, or psychodynamic approaches all have evidence for heartbreak-related depression and anxiety.</li>
<li><strong>Schema Therapy</strong> — Particularly useful if the breakup has activated deep core beliefs about being unlovable or abandoned.</li>
<li><strong>Medication</strong> — A GP or psychiatrist can assess whether short-term antidepressants would support recovery.</li>
</ul>
<h3>If You're in Crisis Right Now</h3>
<ul>
<li>India: Vandrevala Foundation <code>1860-2662-345</code> (24/7) | iCall <code>9152987821</code></li>
<li>US: 988 Lifeline: <code>988</code> | Crisis Text Line: text HOME to <code>741741</code></li>
<li>UK: Samaritans <code>116 123</code></li>
<li>Australia: Lifeline <code>13 11 14</code></li>
</ul>
<blockquote><em>"You will love again. And in the meantime — you are still whole."</em></blockquote>`,
            qr: ["I need professional help", "I'm having thoughts of self-harm"]
          }
        ]
      },
      general: {
        label: "General Sadness",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Sadness Is Part of Being Fully Human",
            text: `<h2>🌱 Basic: Sadness Is Part of Being Fully Human</h2>
<p>Feeling sad — without being able to point to a specific reason — is one of the most human experiences there is. You don't need to justify or explain your sadness to take care of yourself. It is always valid.</p>
<h3>Right Now</h3>
<ul>
<li><strong>Allow it</strong> — Resist the urge to immediately cheer yourself up or distract yourself. Sit with the feeling for a few minutes. Where do you feel it in your body? Sadness processed is sadness that passes.</li>
<li><strong>Small acts of kindness to yourself</strong> — Make your favourite warm drink. Put on a comforting film or playlist. Go outside for 10 minutes. Small, caring acts signal to your nervous system that you're safe.</li>
<li><strong>Don't isolate</strong> — Sadness whispers "leave me alone" but connection is often exactly what it needs. You don't have to talk about it — just being near people can help.</li>
</ul>
<blockquote><em>"The word 'happy' would lose its meaning if it were not balanced by sadness." — Carl Gustav Jung</em></blockquote>`,
            qr: ["I feel this often", "I've been crying without knowing why", "I feel empty, not sad", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Understanding Your Sadness",
            text: `<h2>🌿 Intermediate: Understanding Your Sadness</h2>
<p>Persistent or recurring sadness often has roots worth understanding. This level explores tools for both coping and self-insight.</p>
<h3>Behavioural Activation</h3>
<ul>
<li>One of the most evidence-based tools for sadness and low mood is <strong>behavioural activation</strong>. When sad, we naturally withdraw and lose motivation — which deepens sadness. Deliberately engaging in activities (even without motivation) reverses this cycle.</li>
<li>Make a list of activities that previously brought you pleasure or a sense of achievement. Schedule at least one each day, even for 15 minutes. Track your mood before and after.</li>
</ul>
<h3>The Thought-Mood Link</h3>
<ul>
<li>Notice what you're telling yourself when you're sad. Common sadness-maintaining thoughts: "Things will never get better," "I don't deserve good things," "I'm a burden." These are thoughts, not facts — and they can be examined.</li>
</ul>
<h3>Emotional Naming</h3>
<ul>
<li>Research shows that specifically naming emotions (granularity) helps regulate them. Instead of "I feel bad," try: "I feel disappointed and a little scared." The more precisely you name it, the less power it has.</li>
</ul>
<blockquote><em>"Tears are words the heart can't express." — Gerard Way</em></blockquote>`,
            qr: ["I have no motivation to do anything", "I feel this every day", "Could this be depression?", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Sadness, Low Mood & Depression",
            text: `<h2>🔥 Advanced: Sadness, Low Mood &amp; Depression</h2>
<p>Understanding the difference between sadness, low mood, and clinical depression — and the psychological mechanisms involved — helps you respond appropriately.</p>
<h3>Sadness vs. Depression</h3>
<ul>
<li><strong>Sadness</strong> is a normal emotion, usually connected to a cause, which passes. <strong>Depression</strong> is a clinical syndrome involving persistent low mood, loss of pleasure (anhedonia), cognitive changes, and physical symptoms — for 2+ weeks, most of the day.</li>
<li>The absence of feeling (emotional numbness, anhedonia) is often more characteristic of depression than sadness itself.</li>
</ul>
<h3>CBT for Low Mood</h3>
<ul>
<li>The cognitive triad of depression (Aaron Beck): negative views of the self ("I'm worthless"), the world ("Everything is pointless"), and the future ("Nothing will get better"). CBT works by systematically challenging these views.</li>
</ul>
<h3>Rumination</h3>
<ul>
<li>Rumination — passive, repetitive thinking about negative feelings — is strongly associated with both the onset and maintenance of depression. Interrupting rumination through behavioural activation, mindfulness, or exercise is a key intervention.</li>
</ul>
<blockquote><em>"Even the darkest night will end, and the sun will rise." — Victor Hugo</em></blockquote>`,
            qr: ["I think I might be depressed", "I feel nothing most of the time", "I ruminate constantly", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Depression & Clinical Support",
            text: `<h2>💎 Pro: Depression &amp; Clinical Support</h2>
<p>If sadness and low mood have persisted for weeks, are interfering with your daily functioning, and haven't responded to self-help, it's time to seek professional assessment. Depression is a medical condition — treatable, common, and not your fault.</p>
<h3>Depression Criteria (ICD-10)</h3>
<ul>
<li>Persistent low mood most of the day, most days</li>
<li>Loss of interest or pleasure in previously enjoyed activities</li>
<li>Fatigue and reduced energy</li>
<li>Difficulty concentrating, making decisions</li>
<li>Changes in sleep (insomnia or hypersomnia)</li>
<li>Changes in appetite or weight</li>
<li>Feelings of worthlessness or excessive guilt</li>
<li>In severe cases: thoughts of death or self-harm</li>
</ul>
<h3>Evidence-Based Treatments</h3>
<ul>
<li><strong>CBT</strong> — Most researched psychological treatment for depression. 12–20 sessions.</li>
<li><strong>Behavioural Activation Therapy</strong> — Effective, especially for anhedonia.</li>
<li><strong>Antidepressants</strong> — SSRIs/SNRIs. Effective especially for moderate-severe depression. Discuss with your GP or psychiatrist.</li>
<li><strong>Combined treatment</strong> — Therapy + medication is most effective for moderate-severe depression.</li>
</ul>
<h3>If You're Having Thoughts of Self-Harm</h3>
<ul>
<li>India: <code>9152987821</code> | US: <code>988</code> | UK: <code>116 123</code> | Australia: <code>13 11 14</code></li>
</ul>
<blockquote><em>"Depression is a flaw in chemistry, not a flaw in character." — Unknown</em></blockquote>`,
            qr: ["I need professional help", "I'm having thoughts of self-harm"]
          }
        ]
      }
    },
    subQR: ["Grief / Loss", "Loneliness", "Heartbreak / Breakup", "General sadness / feeling low"]
  },

  // ─────────────────────────────────────────────
  // TOPIC 4: GREAT (POSITIVE FEELINGS)
  // ─────────────────────────────────────────────
  great: {
    label: "positive feeling",
    subtypes: {
      energised: {
        label: "Energised & Motivated",
        levels: [
          {
            level: "basic",
            icon: "🌟",
            title: "Basic: Ride the Wave",
            text: `<h2>🌟 Basic: Ride the Wave</h2>
<p>You're feeling energised and motivated — that's wonderful! This state is precious. Let's make the most of it and channel it well.</p>
<h3>Make the Most of This Energy</h3>
<ul>
<li><strong>Act on your most important goal</strong> — Don't spend this energy on trivial tasks. Ask: "What's the one thing that, if done today, would make the biggest positive difference?" Do that.</li>
<li><strong>Note what triggered this state</strong> — Did you sleep well? Exercise? Have a meaningful conversation? Eat well? Identifying the conditions that create this energy helps you recreate them.</li>
<li><strong>Plan while you're optimistic</strong> — High-energy states are ideal for setting goals, planning ambitious projects, or making decisions that require confidence. Use this window.</li>
</ul>
<h3>Savour It</h3>
<ul>
<li>Don't just do — occasionally pause and notice the feeling. Savouring positive states (deliberately attending to and appreciating them) prolongs them and builds psychological resilience (Bryant &amp; Veroff, 2007).</li>
</ul>
<blockquote><em>"Energy and persistence conquer all things." — Benjamin Franklin</em></blockquote>`,
            qr: ["I want to channel this well", "How do I sustain this?", "I want to set a meaningful goal", "Tell me the next level"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Sustaining Your Momentum",
            text: `<h2>🌿 Intermediate: Sustaining Your Momentum</h2>
<p>Motivation is like a fire — it needs fuel and tending. These strategies help you sustain and build on your current energised state.</p>
<h3>Implementation Intentions</h3>
<ul>
<li>Research by Peter Gollwitzer shows that "when-then" planning dramatically increases follow-through: "When I sit down at my desk tomorrow morning, I will immediately start with my top priority task." Specificity bridges intention and action.</li>
</ul>
<h3>Building Intrinsic Motivation</h3>
<ul>
<li>Self-Determination Theory (Deci &amp; Ryan) shows that sustainable motivation comes from three sources: <strong>autonomy</strong> (I chose this), <strong>competence</strong> (I'm getting better), and <strong>relatedness</strong> (this connects me to others). Check which of these fuels your current motivation.</li>
</ul>
<h3>The Progress Principle</h3>
<ul>
<li>Teresa Amabile's research found that the single greatest day-to-day motivator is making progress on meaningful work. Build in visible milestones — even small ones — to keep motivation high.</li>
</ul>
<blockquote><em>"Success is not final, failure is not fatal: it is the courage to continue that counts." — Winston Churchill</em></blockquote>`,
            qr: ["I lose motivation quickly", "How do I set meaningful goals?", "I want to build lasting habits", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Flow, Purpose & Peak Performance",
            text: `<h2>🔥 Advanced: Flow, Purpose &amp; Peak Performance</h2>
<p>When energy and motivation are high, you're closest to the psychological states associated with peak performance and deep fulfillment. Let's explore how to access these reliably.</p>
<h3>Flow (Csikszentmihalyi)</h3>
<ul>
<li>Flow is the state of optimal engagement — absorbed, effortless performance. It requires: clear goals, immediate feedback, and a challenge-skill balance (slightly stretching your current level).</li>
<li>To engineer flow: eliminate interruptions, define a clear goal for the session, and choose work that stretches you appropriately.</li>
</ul>
<h3>Ikigai & Purpose</h3>
<ul>
<li>The Japanese concept of <em>ikigai</em> (reason for being) sits at the intersection of what you love, what you're good at, what the world needs, and what you can be paid for. High motivation is most sustainable when connected to a sense of purpose.</li>
</ul>
<h3>Managing High Energy Responsibly</h3>
<ul>
<li>High-energy states can also lead to overcommitment and eventual burnout. Use this energy to build systems and habits that sustain you, not just to sprint.</li>
</ul>
<blockquote><em>"The secret of getting ahead is getting started." — Mark Twain</em></blockquote>`,
            qr: ["I want to find my purpose", "How do I engineer flow states?", "I want to share this energy with others", "Tell me the next level"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Building a Life of Sustained Energy",
            text: `<h2>💎 Pro: Building a Life of Sustained Energy</h2>
<p>At this level, we're talking about not just riding waves of motivation but designing a life where energy, meaning, and vitality are structurally supported. This is positive psychology at its deepest.</p>
<h3>PERMA Model (Seligman)</h3>
<ul>
<li>Martin Seligman's PERMA model identifies the five pillars of flourishing: <strong>P</strong>ositive emotions, <strong>E</strong>ngagement (flow), <strong>R</strong>elationships, <strong>M</strong>eaning, and <strong>A</strong>ccomplishment. Audit your life against each pillar — where are the gaps?</li>
</ul>
<h3>Ultradian Rhythms & Energy Management</h3>
<ul>
<li>Our bodies run on 90-minute ultradian cycles. Working with these cycles (90 minutes of focused work, then a genuine rest break) is more sustainable than grinding. Top performers across sport, arts, and academia work this way.</li>
</ul>
<h3>Pay It Forward</h3>
<ul>
<li>One of the most reliable ways to sustain positive energy is to invest it in others. Mentoring, volunteering, or simply being generous with attention creates a positive feedback loop between your state and your relationships.</li>
</ul>
<blockquote><em>"The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience." — Eleanor Roosevelt</em></blockquote>`,
            qr: ["I want to build a flourishing life", "Help me identify my PERMA gaps"]
          }
        ]
      },
      peaceful: {
        label: "Peaceful & Content",
        levels: [
          {
            level: "basic",
            icon: "🌟",
            title: "Basic: Welcome to the Present",
            text: `<h2>🌟 Basic: Welcome to the Present</h2>
<p>Feeling peaceful and content is a gift — and it's worth pausing to fully inhabit it. In a world that constantly urges more, faster, better — contentment is quietly revolutionary.</p>
<h3>Savour This Moment</h3>
<ul>
<li><strong>Three senses present</strong> — Notice what you can see, hear, and feel right now. This grounds the peaceful feeling in your body and anchors it.</li>
<li><strong>No urgency</strong> — Resist any impulse to be "productive" with this peace. Rest fully in it. It is, in itself, valuable.</li>
<li><strong>Note it down</strong> — A brief journal entry about how you feel right now — what's contributing to it, what it feels like in your body — creates a positive memory you can return to.</li>
</ul>
<h3>The Science of Contentment</h3>
<ul>
<li>Research in positive psychology suggests that contentment — quiet satisfaction with the present — is more sustainable and more strongly linked to long-term wellbeing than excitement or intense happiness. You're in a beneficial state.</li>
</ul>
<blockquote><em>"Contentment is natural wealth; luxury is artificial poverty." — Socrates</em></blockquote>`,
            qr: ["I want to feel this more often", "How do I cultivate peace?", "What is contentment vs happiness?", "Tell me the next level"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Cultivating Inner Peace",
            text: `<h2>🌿 Intermediate: Cultivating Inner Peace</h2>
<p>Peace isn't just a feeling that visits — it's a capacity that can be cultivated. These evidence-based practices build it structurally into your life.</p>
<h3>Mindfulness as Peace Training</h3>
<ul>
<li>Jon Kabat-Zinn's Mindfulness-Based Stress Reduction (MBSR) programme has extensive evidence showing that regular mindfulness practice — even 10–20 minutes daily — increases baseline feelings of peace and wellbeing while reducing reactivity.</li>
</ul>
<h3>Acceptance (Not Resignation)</h3>
<ul>
<li>Much of our unrest comes from resisting what is — judging ourselves, others, or circumstances as "not as they should be." ACT distinguishes <em>acceptance</em> (allowing reality as it is) from <em>resignation</em> (giving up). Peace lives in the former.</li>
</ul>
<h3>Gratitude Practice</h3>
<ul>
<li>A daily gratitude practice (3 specific things per day — genuine, specific, not generic) is one of the most replicated positive psychology interventions. It shifts attentional focus toward the positive and builds a peaceful relationship with ordinary life.</li>
</ul>
<blockquote><em>"Peace is not the absence of conflict, but the ability to cope with it." — Mahatma Gandhi</em></blockquote>`,
            qr: ["I want to start a mindfulness practice", "How do I let go of resistance?", "Peace is rare for me — why?", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Equanimity & Deep Wellbeing",
            text: `<h2>🔥 Advanced: Equanimity &amp; Deep Wellbeing</h2>
<p>Beyond temporary peace, the deeper aspiration is equanimity — a stable, undisturbed quality of mind that holds experiences (good and bad) with equal steadiness. This is the highest tier of emotional regulation.</p>
<h3>Equanimity in Buddhist Psychology</h3>
<ul>
<li>Upekkha (equanimity) in Buddhist practice is one of the four brahmaviharas — boundless qualities of the awakened mind. It differs from indifference: it is warm, open, and engaged — just not reactive.</li>
</ul>
<h3>Neuroscience of Calm</h3>
<ul>
<li>Neuroscientist Richard Davidson's research identifies that the left prefrontal cortex is associated with approach states and positive affect. Meditation practice measurably increases activity in this region over time. Peace is, literally, trainable.</li>
</ul>
<h3>Stoic Practices for Peaceful Living</h3>
<ul>
<li>The Stoic <em>dichotomy of control</em> (Epictetus): distinguish what is in your control (thoughts, reactions) from what is not (external events, others' actions). Focus entirely on the former. This is the philosophical foundation of CBT, and a reliable route to peace.</li>
</ul>
<blockquote><em>"You have power over your mind — not outside events. Realise this, and you will find strength." — Marcus Aurelius</em></blockquote>`,
            qr: ["I want to explore Stoicism", "How do I maintain peace during challenges?", "Tell me about equanimity", "Tell me the next level"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Living a Contemplative, Intentional Life",
            text: `<h2>💎 Pro: Living a Contemplative, Intentional Life</h2>
<p>At this level, we're talking about living with depth and intention — building a life where peace isn't an occasional visitor but a structural quality. This is contemplative practice applied to everyday existence.</p>
<h3>The Examined Life</h3>
<ul>
<li>Socrates: "The unexamined life is not worth living." Regular reflection — through journalling, contemplative practice, or therapy — cultivates a self-knowledge that is the foundation of lasting peace.</li>
</ul>
<h3>Digital Minimalism</h3>
<ul>
<li>Cal Newport's research shows that intentional reduction of digital stimulation (social media, notifications, constant news) dramatically increases baseline peace and attention quality. Consider a weekly "digital sabbath."</li>
</ul>
<h3>Nature and Peace</h3>
<ul>
<li>Attention Restoration Theory (Kaplan &amp; Kaplan) shows that natural environments restore directed attention and reduce mental fatigue. Even 20 minutes in a park significantly reduces cortisol and improves mood. Make nature a regular practice.</li>
</ul>
<blockquote><em>"In every walk with nature, one receives far more than he seeks." — John Muir</em></blockquote>`,
            qr: ["I want to design a more intentional life", "Recommend some contemplative practices"]
          }
        ]
      },
      grateful: {
        label: "Feeling Grateful",
        levels: [
          {
            level: "basic",
            icon: "🌟",
            title: "Basic: Let Gratitude Land",
            text: `<h2>🌟 Basic: Let Gratitude Land</h2>
<p>Feeling grateful is a beautiful state — and science backs up its power. Dr. Robert Emmons, the world's leading gratitude researcher, has found that grateful people are more joyful, more energetic, more forgiving, and less envious. You're in a genuinely good place.</p>
<h3>Deepen It Right Now</h3>
<ul>
<li><strong>Be specific</strong> — Don't just feel grateful in general. Name exactly what you're grateful for and why it matters. Specificity turns a vague feeling into a vivid, memorable emotional experience.</li>
<li><strong>Express it</strong> — Tell someone. Gratitude letters, thank-you texts, or face-to-face appreciation are among the most reliable ways to boost both your wellbeing and the recipient's. The <em>gratitude visit</em> (Seligman) — delivering a letter of gratitude in person — is one of the most powerful positive psychology interventions known.</li>
</ul>
<blockquote><em>"Gratitude is not only the greatest of virtues, but the parent of all others." — Cicero</em></blockquote>`,
            qr: ["I want to express gratitude to someone", "How do I build a gratitude practice?", "Can gratitude be sustained?", "Tell me the next level"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Building a Gratitude Practice",
            text: `<h2>🌿 Intermediate: Building a Gratitude Practice</h2>
<p>Gratitude as a fleeting feeling is lovely. Gratitude as a daily practice is transformative. Here's how to build it intentionally.</p>
<h3>Gratitude Journalling (Properly)</h3>
<ul>
<li>Write 3 specific, different things you're grateful for each day — and <em>why</em>. The "why" is crucial; it prevents the list becoming automatic and meaningless.</li>
<li>Don't write every day if that dilutes the feeling. Studies show 3 days a week may be more effective than daily for some people.</li>
</ul>
<h3>Gratitude During Hardship</h3>
<ul>
<li>The real power of gratitude shows when things are hard. This is not toxic positivity — it's the capacity to notice what is still good alongside what is difficult. "Despite this pain, I'm grateful for..."</li>
</ul>
<h3>Gratitude and Social Bonds</h3>
<ul>
<li>Research shows that expressing gratitude to others strengthens social bonds. It signals that you notice them, that they matter, that your relationship has value. Make gratitude a relational practice.</li>
</ul>
<blockquote><em>"Gratitude turns what we have into enough." — Melody Beattie</em></blockquote>`,
            qr: ["I want to write a gratitude letter", "How do I feel grateful when things are hard?", "Does gratitude really work?", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: The Deep Psychology of Gratitude",
            text: `<h2>🔥 Advanced: The Deep Psychology of Gratitude</h2>
<p>Gratitude is more than a feeling or a practice — it's a philosophical orientation toward life. Let's explore its deeper dimensions.</p>
<h3>Gratitude and the Negativity Bias</h3>
<ul>
<li>Our brains are wired to notice threats more than gifts — an evolutionary adaptation that kept our ancestors safe. Gratitude practice is, in part, a deliberate override of this bias: training attention toward the positive without denying the negative.</li>
</ul>
<h3>Existential Gratitude</h3>
<ul>
<li>Philosophers from Seneca to Heidegger have argued for a gratitude rooted in the sheer improbability of existence — that any of us exist at all, in this form, at this moment. This existential gratitude is qualitatively different from gratitude for specific good things.</li>
</ul>
<h3>Gratitude vs. Indebtedness</h3>
<ul>
<li>Research distinguishes <em>gratitude</em> (a warm appreciation) from <em>indebtedness</em> (a burden that creates obligation). True gratitude is freely given, not owed. Distinguishing these improves both the quality of the feeling and the relationship.</li>
</ul>
<blockquote><em>"If the only prayer you ever say in your entire life is 'thank you,' that will be enough." — Meister Eckhart</em></blockquote>`,
            qr: ["I find existential gratitude profound", "How do I practise gratitude more deeply?", "I want to share this with others", "Tell me the next level"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Gratitude as a Way of Being",
            text: `<h2>💎 Pro: Gratitude as a Way of Being</h2>
<p>At the deepest level, gratitude is not something you practice but something you are — a fundamental orientation of openness and appreciation toward life. This is the aspiration of all gratitude work.</p>
<h3>Contemplative Gratitude Across Traditions</h3>
<ul>
<li>Every major wisdom tradition has a form of gratitude practice — Jewish <em>modeh ani</em>, Islamic <em>shukr</em>, Christian eucharist, Buddhist <em>mudita</em> (appreciative joy), Hindu <em>kritajna</em>. Gratitude is among the most universal of human virtues.</li>
</ul>
<h3>Gratitude in Adversity (Post-Traumatic Growth)</h3>
<ul>
<li>Some of the most profound gratitude is born from the hardest experiences. Tedeschi &amp; Calhoun's work on post-traumatic growth documents how many trauma survivors develop a profound appreciation for life, relationships, and small pleasures that wasn't present before.</li>
</ul>
<h3>Sharing Your Gratitude</h3>
<ul>
<li>Consider who in your life has been impactful and who doesn't know it. A letter, a call, a specific acknowledgment — these acts change lives. Be the person who speaks appreciation aloud.</li>
</ul>
<blockquote><em>"Enough. These few words are enough. If not these words, this breath. If not this breath, this sitting here." — David Whyte</em></blockquote>`,
            qr: ["I want to write gratitude letters to people I love", "Help me reflect on what I'm most grateful for"]
          }
        ]
      },
      accomplished: {
        label: "Accomplished / Proud",
        levels: [
          {
            level: "basic",
            icon: "🌟",
            title: "Basic: You Did Something Worth Celebrating",
            text: `<h2>🌟 Basic: You Did Something Worth Celebrating</h2>
<p>Feeling accomplished or proud is a state many people rush past — checking off the achievement and immediately moving to the next thing. Stop. You deserve to actually feel this.</p>
<h3>Actually Celebrate It</h3>
<ul>
<li><strong>Name it out loud</strong> — Say or write: "I am proud of myself for [specific thing]." Research on self-compassion shows that we rarely give ourselves the same acknowledgment we'd give a friend. Do it.</li>
<li><strong>Share it</strong> — Tell one person who will celebrate with you. Social sharing of positive events amplifies them — a phenomenon called <em>capitalisation</em> (Gable et al., 2004).</li>
<li><strong>Savour the journey</strong> — Think back to what it took to get here. The effort, the difficulty, the moments of doubt. Full appreciation of accomplishment includes the path, not just the destination.</li>
</ul>
<blockquote><em>"Celebrate what you want to see more of." — Tom Peters</em></blockquote>`,
            qr: ["I feel proud but also relieved", "I want to build on this achievement", "I find it hard to acknowledge my wins", "Tell me the next level"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Building on Your Achievement",
            text: `<h2>🌿 Intermediate: Building on Your Achievement</h2>
<p>Achievement creates momentum. Here's how to use it wisely to build the next chapter.</p>
<h3>Reflect Before Rushing Forward</h3>
<ul>
<li>Before jumping to the next goal, spend time in genuine reflection: What worked? What surprised me? What would I do differently? This <em>after-action review</em> is used by elite athletes and military teams to extract maximum learning from each experience.</li>
</ul>
<h3>Avoid the Arrival Fallacy</h3>
<ul>
<li>Psychologist Tal Ben-Shahar coined "arrival fallacy" — the mistaken belief that achieving a goal will bring lasting happiness. Research consistently shows that the emotional boost from achievement is briefer than predicted. Build joy into the process, not just the destination.</li>
</ul>
<h3>Set Your Next Meaningful Goal</h3>
<ul>
<li>Use the SMART framework: Specific, Measurable, Achievable, Relevant, Time-bound. But add a fifth dimension: <em>meaningful</em> — does this goal connect to your values and sense of purpose?</li>
</ul>
<blockquote><em>"Success is not the key to happiness. Happiness is the key to success." — Albert Schweitzer</em></blockquote>`,
            qr: ["I rush to the next goal immediately", "I struggle to feel proud of myself", "What should my next goal be?", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Achievement, Identity & Growth Mindset",
            text: `<h2>🔥 Advanced: Achievement, Identity &amp; Growth Mindset</h2>
<p>How you relate to your achievements says a great deal about your psychological relationship with yourself — and shapes how you approach future challenges.</p>
<h3>Growth vs. Fixed Mindset (Dweck)</h3>
<ul>
<li>Carol Dweck's research distinguishes the <strong>fixed mindset</strong> (talent is innate; achievement proves my worth) from the <strong>growth mindset</strong> (abilities develop through effort; achievement reflects learning). Fixed mindset people fear challenges; growth mindset people seek them.</li>
<li>Notice: when you feel proud, are you proud of your <em>effort and process</em>, or only the outcome? The former is more sustainable.</li>
</ul>
<h3>Authentic Pride vs. Hubristic Pride</h3>
<ul>
<li>Research by Jessica Tracy distinguishes <em>authentic pride</em> ("I worked hard and achieved this") from <em>hubristic pride</em> ("I am superior to others"). Authentic pride builds resilience; hubristic pride is fragile and damages relationships.</li>
</ul>
<h3>Sharing Without Boasting</h3>
<ul>
<li>Authentic sharing of achievement — acknowledging it without hierarchy — inspires others. Consider mentoring, teaching, or documenting your process so others can learn from it.</li>
</ul>
<blockquote><em>"The more you lose yourself in something bigger than yourself, the more energy you will have." — Norman Vincent Peale</em></blockquote>`,
            qr: ["I relate to imposter syndrome", "How do I share achievements without feeling boastful?", "I want to help others achieve", "Tell me the next level"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Legacy, Mastery & Meaningful Achievement",
            text: `<h2>💎 Pro: Legacy, Mastery &amp; Meaningful Achievement</h2>
<p>At the deepest level, achievement becomes most meaningful when it connects to something larger than the self — to mastery, to legacy, to contribution.</p>
<h3>Mastery (Pink)</h3>
<ul>
<li>Daniel Pink's work identifies mastery — the desire to get better and better at something that matters — as a core intrinsic motivator. Unlike external rewards, mastery produces enduring satisfaction. Ask: am I pursuing mastery, or just accomplishments?</li>
</ul>
<h3>Generativity (Erikson)</h3>
<ul>
<li>Erik Erikson identified <em>generativity</em> — caring for the next generation, leaving something of value — as a key developmental task of adulthood. Achievement without contribution eventually feels hollow. What are you building that will outlast you?</li>
</ul>
<h3>Eudemonic vs. Hedonic Wellbeing</h3>
<ul>
<li>Aristotle's distinction between <em>eudaimonia</em> (flourishing through virtue and purpose) and <em>hedonia</em> (pleasure) maps onto modern research: eudemonic wellbeing is more strongly associated with lasting happiness than hedonic pleasure. Achievement that contributes to eudaimonia is the deepest kind.</li>
</ul>
<blockquote><em>"We are not here merely to make a living. We are here to enrich the world." — Woodrow Wilson</em></blockquote>`,
            qr: ["I want to think about legacy", "Help me connect achievement to purpose"]
          }
        ]
      }
    },
    subQR: ["Energised & motivated", "Peaceful & content", "Feeling grateful", "Accomplished / proud"]
  },

  // ─────────────────────────────────────────────
  // TOPIC 5: COPING
  // ─────────────────────────────────────────────
  coping: {
    label: "coping",
    subtypes: {
      overwhelm: {
        label: "Overwhelmed",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: When Everything Is Too Much",
            text: `<h2>🌱 Basic: When Everything Is Too Much</h2>
<p>Overwhelm is that specific feeling when demands exceed your capacity — when the to-do list, the emotions, the decisions, and the noise all pile on at once. It's a real and distinct physiological state, and it deserves an immediate, gentle response.</p>
<h3>Right Now: The HALT Check</h3>
<ul>
<li>Ask yourself: am I Hungry, Angry, Lonely, or Tired? These four states dramatically amplify overwhelm. Address whichever applies first — eat something, drink water, rest for 10 minutes, or reach out to one person.</li>
</ul>
<h3>One Thing</h3>
<ul>
<li>When overwhelmed, don't try to plan everything. Ask: "What is the ONE thing I can do in the next 5 minutes?" Do only that. Then reassess.</li>
<li>Write your tasks out on paper if they're swirling in your head. Externalising them removes them from your mental working memory and makes the pile feel less infinite.</li>
</ul>
<h3>Sensory Reset</h3>
<ul>
<li>Splash cold water on your face. Step outside. Put on calming music. These sensory inputs interrupt the overwhelm loop at a physiological level.</li>
</ul>
<blockquote><em>"You don't have to do everything at once. You only have to do the next right thing." — Glennon Doyle</em></blockquote>`,
            qr: ["I don't know where to start", "I feel paralysed", "Everything feels urgent", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Triage & Restore",
            text: `<h2>🌿 Intermediate: Triage &amp; Restore</h2>
<p>When overwhelm is a recurring experience, you need both immediate triage skills and longer-term structural changes. Let's address both.</p>
<h3>Triage (Immediate)</h3>
<ul>
<li>Use the Eisenhower Matrix: divide everything into urgent/important quadrants. Most of what feels urgent actually isn't. Identifying true priorities dramatically reduces overwhelm's cognitive load.</li>
<li>Ruthlessly postpone, delegate, or delete low-priority items. "Good enough done" beats "perfect unfinished."</li>
</ul>
<h3>Restorative Practices</h3>
<ul>
<li>Overwhelm depletes cognitive and emotional resources. Genuine restoration (not just passive distraction) is necessary. Evidence-based restoratives: sleep, nature walks, social connection, creative activities, and exercise.</li>
<li>Distinguish <em>rest</em> (nothing) from <em>recovery</em> (active restoration). Both have their place.</li>
</ul>
<h3>Reduce Input Overload</h3>
<ul>
<li>Overwhelm is often driven by information overload. Turn off non-essential notifications. Designate specific email/message check times. Protect periods of uninterrupted focus.</li>
</ul>
<blockquote><em>"You can do anything, but not everything." — David Allen</em></blockquote>`,
            qr: ["I can't prioritise — it all feels equal", "My overwhelm is chronic", "I'm overwhelmed at work specifically", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: The Neuroscience of Overwhelm",
            text: `<h2>🔥 Advanced: The Neuroscience of Overwhelm</h2>
<p>Understanding what overwhelm does to the brain gives you more tools to work with it — not just manage the symptoms.</p>
<h3>Cognitive Overload (Sweller)</h3>
<ul>
<li>John Sweller's Cognitive Load Theory describes how working memory has limited capacity. When that capacity is exceeded, processing shuts down and anxiety rises. This is overwhelm — a cognitive traffic jam.</li>
<li>External systems (notes, calendars, checklists) offload cognitive load from working memory, literally reducing overwhelm. This is why "getting things out of your head" is evidence-based, not just folksy advice.</li>
</ul>
<h3>Window of Tolerance (Siegel)</h3>
<ul>
<li>Daniel Siegel's window of tolerance describes the optimal zone of nervous system arousal — neither hyper-aroused (anxiety, panic) nor hypo-aroused (shutdown, dissociation). Overwhelm pushes us above the window. Grounding and somatic practices help return us to it.</li>
</ul>
<h3>Structural Causes</h3>
<ul>
<li>Chronic overwhelm is rarely just a coping problem — it often reflects systemic issues (unsustainable workload, inadequate support, unclear boundaries). These require structural change, not just better coping strategies.</li>
</ul>
<blockquote><em>"If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment." — Marcus Aurelius</em></blockquote>`,
            qr: ["I think my workload is genuinely too much", "I feel like I'm in shutdown mode", "I relate to the window of tolerance", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Chronic Overwhelm & Professional Help",
            text: `<h2>💎 Pro: Chronic Overwhelm &amp; Professional Help</h2>
<p>If overwhelm is constant, severe, and not responding to self-help, it may indicate burnout, anxiety, ADHD, or a combination. Professional support can provide assessment and targeted treatment.</p>
<h3>Conditions to Consider</h3>
<ul>
<li><strong>Burnout</strong> — Emotional exhaustion, detachment, reduced efficacy</li>
<li><strong>ADHD</strong> — Executive function challenges make overwhelm a chronic daily reality for many adults. Often undiagnosed.</li>
<li><strong>GAD</strong> — Generalised anxiety maintains a state of ongoing cognitive overload</li>
<li><strong>Complex Trauma (C-PTSD)</strong> — Chronic overwhelm and emotional dysregulation can be trauma responses</li>
</ul>
<h3>Professional Treatment Options</h3>
<ul>
<li>ADHD assessment and coaching — life-changing for many chronically overwhelmed individuals</li>
<li>CBT for anxiety and burnout</li>
<li>DBT skills (specifically distress tolerance and emotion regulation) — excellent for overwhelm</li>
<li>Medication — for ADHD, anxiety, or depression as indicated</li>
</ul>
<h3>Resources</h3>
<ul>
<li>India: iCall <code>9152987821</code> | US: <code>988</code> | UK: <code>116 123</code> | Australia: <code>13 11 14</code></li>
</ul>
<blockquote><em>"Asking for help is the first step. You've already taken it."</em></blockquote>`,
            qr: ["I need professional help", "Could I have ADHD?"]
          }
        ]
      },
      procrastination: {
        label: "Procrastination",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Procrastination Is Not Laziness",
            text: `<h2>🌱 Basic: Procrastination Is Not Laziness</h2>
<p>This is important: procrastination is not a character flaw. Research now shows it is primarily an <em>emotion regulation problem</em> — we avoid tasks because they trigger uncomfortable emotions (anxiety, boredom, self-doubt, perfectionism). Understanding this changes everything.</p>
<h3>Right Now: Just Start</h3>
<ul>
<li><strong>The 2-minute rule</strong> — Commit to just 2 minutes on the task. Set a timer. You are not committing to finishing it. Often, starting is 90% of the battle — the brain settles once engaged.</li>
<li><strong>Make it smaller</strong> — If "write the report" is paralysing, make the task "open the document." If that's still too much, make it "turn on the computer." Find the smallest possible first step.</li>
<li><strong>Remove friction</strong> — Put the book on your pillow. Open the document before bed. Lay out the gym clothes. Reduce the barrier to starting.</li>
</ul>
<blockquote><em>"You don't have to feel like it. You just have to start." — Jeff Hayes</em></blockquote>`,
            qr: ["I always put things off until the last minute", "I feel shame about procrastinating", "I work better under pressure", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Systems That Work",
            text: `<h2>🌿 Intermediate: Systems That Work</h2>
<p>If procrastination is a regular pattern, you need systems, not just willpower. Willpower is finite; good systems work even when motivation is low.</p>
<h3>Time Blocking</h3>
<ul>
<li>Assign specific tasks to specific time blocks in your calendar. Having a pre-made decision ("I work on X from 9-11am Monday") eliminates the daily negotiation with yourself that procrastination thrives in.</li>
</ul>
<h3>Temptation Bundling (Milkman)</h3>
<ul>
<li>Pair a task you're avoiding with something you enjoy — only listen to your favourite podcast while doing the dreaded task. Research shows this "temptation bundling" significantly increases follow-through.</li>
</ul>
<h3>Environment Design</h3>
<ul>
<li>Your environment sends powerful cues. Remove distractions from your physical space. Use a different location or browser profile for work. The library effect is real — context triggers behaviour.</li>
</ul>
<h3>Accountability Partners</h3>
<ul>
<li>Commit to a task publicly — to a friend, a coach, or an online accountability group. External accountability is one of the most powerful anti-procrastination tools available.</li>
</ul>
<blockquote><em>"We are what we repeatedly do. Excellence, then, is not an act but a habit." — Aristotle</em></blockquote>`,
            qr: ["Willpower doesn't work for me", "I procrastinate on personal goals too", "I think I have ADHD", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: The Psychology of Procrastination",
            text: `<h2>🔥 Advanced: The Psychology of Procrastination</h2>
<p>Chronic procrastination often points to deeper psychological patterns. Understanding these is the key to lasting change.</p>
<h3>Procrastination as Emotion Regulation</h3>
<ul>
<li>Fuschia Sirois and Timothy Pychyl's research establishes that chronic procrastination is fundamentally about avoiding negative emotional states associated with tasks — fear of failure, perfectionism, boredom, or self-doubt. The relief of avoidance is immediate; the cost is future.</li>
</ul>
<h3>Perfectionism's Role</h3>
<ul>
<li>Perfectionism is a major driver: "If I can't do it perfectly, I won't do it at all." This is self-protective — you can't fail at something you haven't attempted. But it creates a cage. Work on distinguishing effort from outcome.</li>
</ul>
<h3>Self-Forgiveness Research</h3>
<ul>
<li>Counterintuitively, Michael Wohl's research shows that <em>self-forgiveness for procrastinating</em> is more effective at reducing future procrastination than self-criticism. Harsh judgment increases shame, which increases avoidance.</li>
</ul>
<h3>Temporal Self-Continuity</h3>
<ul>
<li>Research shows procrastinators have reduced "temporal self-continuity" — they experience their future self as almost a stranger. Vividly imagining your future self can close this gap and motivate present action.</li>
</ul>
<blockquote><em>"Someday is not a day of the week." — Janet Dailey</em></blockquote>`,
            qr: ["Perfectionism is definitely involved", "Self-criticism makes me procrastinate more", "I think fear of failure is my core issue", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: When Procrastination Needs Clinical Attention",
            text: `<h2>💎 Pro: When Procrastination Needs Clinical Attention</h2>
<p>For some people, procrastination is not just a habit — it's a symptom of an underlying condition that deserves clinical assessment.</p>
<h3>Underlying Conditions</h3>
<ul>
<li><strong>ADHD</strong> — Executive dysfunction (difficulty initiating, sustaining, and switching tasks) makes procrastination nearly inevitable without proper support. Adult ADHD is significantly underdiagnosed.</li>
<li><strong>Depression</strong> — Anhedonia and low energy make initiation and motivation extremely difficult.</li>
<li><strong>Anxiety</strong> — Avoidance of anxiety-provoking tasks is the definition of behavioural avoidance, a core anxiety maintenance factor.</li>
<li><strong>OCD</strong> — Perfectionism-driven avoidance can be an OCD manifestation.</li>
</ul>
<h3>Professional Options</h3>
<ul>
<li>ADHD assessment and medication/coaching</li>
<li>CBT for anxiety or depression</li>
<li>ADHD coaching specifically — addresses practical executive function strategies</li>
</ul>
<h3>Find Help</h3>
<ul>
<li>India: iCall <code>9152987821</code> | US: CHADD <code>chadd.org</code> | UK: ADHD UK <code>adhduk.co.uk</code></li>
</ul>
<blockquote><em>"Progress, not perfection."</em></blockquote>`,
            qr: ["I need professional help", "I think I have ADHD — what's the next step?"]
          }
        ]
      },
      anger: {
        label: "Anger / Frustration",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Anger Is Information",
            text: `<h2>🌱 Basic: Anger Is Information</h2>
<p>Anger is one of our most misunderstood emotions. It is not inherently bad — it signals that something important to you has been violated. The question is not whether to feel anger, but what to do with it.</p>
<h3>Right Now: Physiological Calm First</h3>
<ul>
<li><strong>Don't respond yet</strong> — If you're actively angry at someone, wait. Responses made in peak anger almost always make things worse. Give yourself 20 minutes minimum before replying to a message or continuing a conversation.</li>
<li><strong>Physical discharge</strong> — Go for a brisk walk, do 10 jumping jacks, squeeze a pillow. Anger is physiological energy — it needs somewhere to go.</li>
<li><strong>Cool down the body</strong> — Cold water on your face or wrists activates the dive reflex and slows heart rate within seconds.</li>
</ul>
<h3>Name It</h3>
<ul>
<li>"I am feeling angry right now, and that's okay." Naming the emotion with compassion begins the de-escalation process.</li>
</ul>
<blockquote><em>"Speak when you are angry, and you will make the best speech you will ever regret." — Ambrose Bierce</em></blockquote>`,
            qr: ["I said something I regret", "My anger scares me or others", "I feel angry all the time", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Understanding & Expressing Anger",
            text: `<h2>🌿 Intermediate: Understanding &amp; Expressing Anger</h2>
<p>Beyond calming down, there's valuable work in understanding what your anger is telling you and how to express it constructively.</p>
<h3>Primary vs. Secondary Anger</h3>
<ul>
<li>Anger is often a <em>secondary emotion</em> — it covers primary emotions like fear, hurt, shame, or disappointment. If you can identify the underlying emotion, you'll be better placed to communicate it and have it heard.</li>
<li>Ask: "Under this anger, what am I actually feeling?" Often the answer is: "I'm hurt that they didn't consider my needs."</li>
</ul>
<h3>Assertive Communication</h3>
<ul>
<li>The goal is neither aggression (expressing anger in ways that harm) nor suppression (swallowing it). <em>Assertive communication</em> expresses your feelings and needs clearly without attacking the other person.</li>
<li>"I feel [emotion] when [situation] because [need]. I'd like [specific request]." This NVC-based structure is powerful.</li>
</ul>
<h3>Anger Journalling</h3>
<ul>
<li>After an anger episode, write: what happened, what you felt, what you needed, and what you did. Over time, patterns reveal triggers and underlying needs.</li>
</ul>
<blockquote><em>"For every minute you remain angry, you give up sixty seconds of peace of mind." — Ralph Waldo Emerson</em></blockquote>`,
            qr: ["My anger hides hurt feelings", "I want to communicate anger better", "I feel angry at myself", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: The Roots of Chronic Anger",
            text: `<h2>🔥 Advanced: The Roots of Chronic Anger</h2>
<p>Persistent or explosive anger often has deep roots — in trauma, attachment history, or patterns of thinking. Understanding these is the path to meaningful change.</p>
<h3>Anger and Trauma</h3>
<ul>
<li>Chronic anger is a common manifestation of trauma and PTSD. The hypervigilant nervous system is primed for threat, and anger is its response. If you suspect trauma is involved, this is important context for treatment choices.</li>
</ul>
<h3>Cognitive Patterns in Anger</h3>
<ul>
<li>Common cognitive distortions maintaining anger: <em>mind-reading</em> ("They did it on purpose"), <em>overgeneralisation</em> ("People always disrespect me"), and <em>entitlement thinking</em> ("Things should be the way I want them").</li>
<li>CBT anger work targets these beliefs specifically through thought records and behavioural experiments.</li>
</ul>
<h3>Attachment and Anger</h3>
<ul>
<li>Anxious attachment often expresses as protest anger — the person fights desperately to re-establish connection. Understanding this reframes apparent aggression as underlying fear.</li>
</ul>
<h3>Dialectical Behaviour Therapy (DBT)</h3>
<ul>
<li>DBT's emotion regulation module is particularly effective for anger. Skills like "opposite action" (acting counter to the emotion's urge), "TIPP" (Temperature, Intense exercise, Paced breathing, Progressive relaxation) directly target anger physiology.</li>
</ul>
<blockquote><em>"Anger is just a poor cover story for pain." — Shannon L. Alder</em></blockquote>`,
            qr: ["I think trauma is involved in my anger", "I want to try DBT skills", "My anger is affecting my relationships", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Anger Disorders & Clinical Treatment",
            text: `<h2>💎 Pro: Anger Disorders &amp; Clinical Treatment</h2>
<p>When anger is frequent, intense, disproportionate to triggers, or causes significant harm to relationships or work, it deserves professional assessment and treatment.</p>
<h3>Relevant Clinical Presentations</h3>
<ul>
<li><strong>Intermittent Explosive Disorder (IED)</strong> — Recurrent, impulsive outbursts grossly disproportionate to the situation</li>
<li><strong>PTSD</strong> — Chronic anger and irritability as a hyperarousal symptom</li>
<li><strong>Bipolar Disorder</strong> — Irritability and explosive anger particularly during hypomanic or mixed episodes</li>
<li><strong>Borderline Personality Disorder (BPD)</strong> — Intense anger as one of nine diagnostic criteria, often linked to fear of abandonment</li>
</ul>
<h3>Evidence-Based Treatment</h3>
<ul>
<li><strong>CBT Anger Management</strong> — Cognitive restructuring and relaxation training specifically for anger</li>
<li><strong>DBT</strong> — Particularly effective for BPD and emotion dysregulation</li>
<li><strong>Trauma-focused therapy (TF-CBT, EMDR)</strong> — When anger is trauma-rooted</li>
<li><strong>Medication</strong> — Mood stabilisers, SSRIs or antipsychotics may be indicated depending on underlying diagnosis</li>
</ul>
<h3>Find Help</h3>
<ul>
<li>India: iCall <code>9152987821</code> | UK: BACP <code>bacp.co.uk</code> | US: <code>psychologytoday.com</code></li>
</ul>
<blockquote><em>"Holding onto anger is like drinking poison and expecting the other person to die." — Buddha</em></blockquote>`,
            qr: ["I need professional help", "I think I might have a diagnosis related to anger"]
          }
        ]
      },
      motivation: {
        label: "Lack of Motivation",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: You Don't Have to Feel Like It First",
            text: `<h2>🌱 Basic: You Don't Have to Feel Like It First</h2>
<p>One of the biggest myths about motivation is that it comes before action. Research in behavioural psychology consistently shows the opposite: action creates motivation, not the other way around. You don't wait to feel like doing something; you start, and the feeling follows.</p>
<h3>Start Impossibly Small</h3>
<ul>
<li><strong>The 2-minute rule</strong> — What can you do for just 2 minutes toward your goal? Not more. Just 2 minutes. This removes the psychological barrier of starting.</li>
<li><strong>Reduce standards temporarily</strong> — Give yourself permission to do it badly. A rough first draft. A short, moderate workout. A mediocre attempt. Done is better than perfect, and done builds momentum.</li>
</ul>
<h3>Check the Basics</h3>
<ul>
<li>Low motivation is often physiological first: Are you sleeping enough? Eating well? Moving your body? Even mild dehydration reduces energy and motivation measurably.</li>
</ul>
<blockquote><em>"You don't have to be great to start, but you have to start to be great." — Zig Ziglar</em></blockquote>`,
            qr: ["I've lost motivation for things I used to love", "I feel apathetic about everything", "I'm not sure what I want", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Rebuilding Your Drive",
            text: `<h2>🌿 Intermediate: Rebuilding Your Drive</h2>
<p>When motivation has been low for a while, you need more than quick tricks — you need to reconnect with what matters and rebuild the conditions for motivation to grow.</p>
<h3>Values Clarification</h3>
<ul>
<li>Motivation is highest when actions align with values. Ask: "What matters most to me in my life right now?" List your top 5 values. Then ask: "Are my daily actions aligned with these?" Misalignment is a major motivation drainer.</li>
</ul>
<h3>Reconnect with Past Vitality</h3>
<ul>
<li>Think back to a time when you felt engaged and alive. What were you doing? Who were you with? What conditions supported that? Use this as a map back.</li>
</ul>
<h3>Reduce Energy Drains</h3>
<ul>
<li>Often the issue isn't low motivation but too many things draining your energy. Toxic relationships, unresolved conflicts, cluttered environments, excessive screen time. Removing drains can free energy for motivation.</li>
</ul>
<h3>Small Wins</h3>
<ul>
<li>Build a "wins list" — record small accomplishments daily. This trains your brain to notice progress, which fuels motivation for the next step.</li>
</ul>
<blockquote><em>"The secret of getting ahead is getting started." — Mark Twain</em></blockquote>`,
            qr: ["I feel disconnected from my goals", "I don't know what my values are", "I used to be motivated — what changed?", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: The Science of Motivation",
            text: `<h2>🔥 Advanced: The Science of Motivation</h2>
<p>Understanding the science of motivation — why it rises and falls — gives you leverage to work with it rather than against it.</p>
<h3>Self-Determination Theory (Deci &amp; Ryan)</h3>
<ul>
<li>SDT identifies three core psychological needs that fuel intrinsic motivation: <strong>autonomy</strong> (I choose this), <strong>competence</strong> (I'm growing), <strong>relatedness</strong> (this connects me to others). Audit your current situation: which need is least fulfilled?</li>
</ul>
<h3>Anhedonia: When Nothing Feels Good</h3>
<ul>
<li>If motivation has dropped significantly and nothing brings pleasure — not things you used to enjoy — this may be <em>anhedonia</em>, a clinical symptom of depression that specifically affects the reward system. It's different from general low motivation and needs careful attention.</li>
</ul>
<h3>Dopamine and Anticipation</h3>
<ul>
<li>Neuroscience shows that dopamine is released in anticipation of reward, not just at its receipt. Building genuine anticipation (looking forward to something, imagining the reward) can activate motivation circuits.</li>
</ul>
<h3>Flow as Motivational Engine</h3>
<ul>
<li>Regularly experiencing flow — optimal challenge — naturally sustains motivation. If you're consistently bored (under-challenged) or overwhelmed (over-challenged), motivation will suffer.</li>
</ul>
<blockquote><em>"People who lack motivation are often people who lack meaning." — Viktor Frankl</em></blockquote>`,
            qr: ["I might have anhedonia", "I feel unmotivated even about things I created", "Could this be depression?", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Anhedonia, Depression & Clinical Help",
            text: `<h2>💎 Pro: Anhedonia, Depression &amp; Clinical Help</h2>
<p>Persistent lack of motivation — especially when accompanied by loss of pleasure, low energy, and hopelessness — may be a clinical presentation of depression or another condition requiring professional care.</p>
<h3>Anhedonia & Depression</h3>
<ul>
<li>Anhedonia (inability to feel pleasure) is considered one of the two core symptoms of major depression (the other being persistent low mood). It reflects actual neurochemical changes in dopamine and reward pathways.</li>
<li>It responds to treatment — but often needs clinical rather than self-help interventions.</li>
</ul>
<h3>Other Conditions Affecting Motivation</h3>
<ul>
<li><strong>Hypothyroidism</strong> — A physical cause of fatigue and low motivation. Easily assessed with a blood test.</li>
<li><strong>ADHD</strong> — Motivation dysregulation is a core feature of ADHD, often misread as laziness.</li>
<li><strong>Burnout</strong> — Profound depletion of emotional and motivational resources.</li>
</ul>
<h3>Evidence-Based Treatments</h3>
<ul>
<li>Behavioural Activation Therapy — Specifically targeting the activity-mood relationship in depression</li>
<li>Antidepressants — Particularly bupropion has evidence specifically for anhedonia</li>
<li>Regular exercise — Has strong evidence comparable to antidepressants for mild-moderate depression</li>
</ul>
<h3>Reach Out</h3>
<ul>
<li>India: iCall <code>9152987821</code> | US: <code>988</code> | UK: <code>116 123</code> | Australia: <code>13 11 14</code></li>
</ul>
<blockquote><em>"When you can't find your motivation, let your values lead you."</em></blockquote>`,
            qr: ["I need professional help", "I think I might be depressed"]
          }
        ]
      }
    },
    subQR: ["I'm overwhelmed", "I'm procrastinating", "I'm angry / frustrated", "I lack motivation"]
  },

  // ─────────────────────────────────────────────
  // TOPIC 6: SLEEP
  // ─────────────────────────────────────────────
  sleep: {
    label: "sleep issues",
    subtypes: {
      insomnia: {
        label: "Can't Fall Asleep",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: Gentle Ways Into Sleep",
            text: `<h2>🌱 Basic: Gentle Ways Into Sleep</h2>
<p>Lying awake unable to fall asleep is one of the most frustrating experiences — especially when you know you need to be up in the morning. Here are some immediate, evidence-based approaches.</p>
<h3>Tonight</h3>
<ul>
<li><strong>Don't try to force sleep</strong> — Trying hard to fall asleep paradoxically increases arousal. Instead, set the intention to rest: "I will simply lie here and let my body rest, whether I sleep or not."</li>
<li><strong>4-7-8 breathing</strong> — Inhale for 4 counts, hold for 7, exhale for 8. This activates the parasympathetic nervous system and reduces arousal.</li>
<li><strong>Body scan</strong> — Slowly bring attention to each body part from feet to head, releasing any tension you find. This moves attention away from racing thoughts and into the body.</li>
<li><strong>Get up if you've been awake 20 minutes</strong> — Go to another room, do something calming (reading, light stretching), and return when sleepy. Lying awake in bed conditions the brain to associate bed with wakefulness.</li>
</ul>
<blockquote><em>"Sleep is the best meditation." — Dalai Lama</em></blockquote>`,
            qr: ["My mind races at night", "I dread bedtime", "I use my phone in bed", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Sleep Hygiene That Actually Works",
            text: `<h2>🌿 Intermediate: Sleep Hygiene That Actually Works</h2>
<p>You've probably heard "sleep hygiene" before — but these specific, evidence-based practices make a real difference when applied consistently.</p>
<h3>Circadian Rhythm Anchors</h3>
<ul>
<li><strong>Fixed wake time</strong> — The single most important sleep habit is waking at the same time every day, regardless of what time you fell asleep. This anchors your circadian rhythm.</li>
<li><strong>Morning light</strong> — Getting bright light (ideally sunlight) within 30 minutes of waking sets your cortisol rhythm and prepares your brain for melatonin release at night. 10–15 minutes is enough.</li>
</ul>
<h3>Evening Wind-Down</h3>
<ul>
<li>Screens emit blue light that suppresses melatonin. Dim all lights 1–2 hours before bed. Use Night Mode on devices.</li>
<li>Keep your room cool (16–18°C / 60–65°F). Body temperature must drop to initiate sleep.</li>
<li>Avoid caffeine after 2pm — its half-life is 5–7 hours, meaning half of a 3pm coffee is still in your system at midnight.</li>
</ul>
<h3>Bed for Sleep Only</h3>
<ul>
<li>Use your bed only for sleep and sex. This strengthens the associative link between bed and sleep onset.</li>
</ul>
<blockquote><em>"Each night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn." — Mahatma Gandhi</em></blockquote>`,
            qr: ["I've tried these but still can't sleep", "Anxiety keeps me awake", "I have really bad sleep anxiety", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: CBT for Insomnia (CBT-I)",
            text: `<h2>🔥 Advanced: CBT for Insomnia (CBT-I)</h2>
<p>CBT-I is the gold-standard treatment for insomnia — more effective than sleep medication in both the short and long term, with lasting effects. Here's how it works.</p>
<h3>Sleep Restriction Therapy</h3>
<ul>
<li>This counterintuitive intervention involves temporarily <em>reducing</em> your time in bed to match your actual sleep time, which builds sleep pressure (adenosine) and consolidates sleep efficiency. Only attempt under guidance or with a structured programme.</li>
</ul>
<h3>Stimulus Control</h3>
<ul>
<li>Only go to bed when sleepy. Get out of bed if you don't fall asleep within 20 minutes. These rules re-associate bed with sleep rather than wakefulness.</li>
</ul>
<h3>Cognitive Restructuring for Sleep</h3>
<ul>
<li>Challenge catastrophic sleep beliefs: "I must get 8 hours or tomorrow will be a disaster" → "My body will function adequately on less than ideal sleep. Many people perform well on 6 hours." Reducing sleep anxiety is half the battle.</li>
</ul>
<h3>Paradoxical Intention</h3>
<ul>
<li>The instruction to "try to stay awake while lying in bed" — this relieves performance pressure around sleep and ironically promotes sleep onset more effectively than trying to sleep.</li>
</ul>
<blockquote><em>"The woods are lovely, dark and deep, but I have promises to keep, and miles to go before I sleep." — Robert Frost</em></blockquote>`,
            qr: ["Tell me more about CBT-I", "I have sleep anxiety specifically", "Is there a digital CBT-I programme?", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Chronic Insomnia & Clinical Treatment",
            text: `<h2>💎 Pro: Chronic Insomnia &amp; Clinical Treatment</h2>
<p>When insomnia is chronic (3+ nights per week, for 3+ months) and significantly impairs daily functioning, clinical intervention is warranted and effective.</p>
<h3>Clinical Assessment</h3>
<ul>
<li>A GP or sleep specialist should rule out: sleep apnoea (especially if you snore or feel unrefreshed), restless leg syndrome, circadian rhythm disorders, and mental health conditions (depression and anxiety cause insomnia, and insomnia worsens them).</li>
</ul>
<h3>Formal CBT-I</h3>
<ul>
<li>Delivered by a trained therapist or via digital programmes: <code>Sleepio</code> (online), <code>CBTI Coach</code> (NHS app). Typically 6–8 sessions. Effectiveness rate of 70–80%.</li>
</ul>
<h3>Medication Options</h3>
<ul>
<li>Short-term: Z-drugs (zopiclone, zolpidem) or benzodiazepines — for brief use only, risk of dependence</li>
<li>Low-dose melatonin — helpful for circadian issues, safe for medium-term use</li>
<li>Low-dose tricyclics (amitriptyline, doxepin) — for insomnia with depression/pain component</li>
<li>Melatonin receptor agonists — newer, lower dependence risk</li>
</ul>
<h3>Find Support</h3>
<ul>
<li>India: iCall <code>9152987821</code> | UK: NHS Sleep Service | US: <code>sleepfoundation.org</code> | Australia: <code>sleephealthfoundation.org.au</code></li>
</ul>
<blockquote><em>"A good laugh and a long sleep are the best cures in the doctor's book." — Irish Proverb</em></blockquote>`,
            qr: ["I need professional help", "Tell me about CBT-I programmes I can access online"]
          }
        ]
      },
      waking: {
        label: "Waking Up During the Night",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: When Sleep Breaks Apart",
            text: `<h2>🌱 Basic: When Sleep Breaks Apart</h2>
<p>Waking up in the middle of the night — especially multiple times — is genuinely disruptive. Here's what to do when you find yourself awake at 2am.</p>
<h3>When You Wake Up</h3>
<ul>
<li><strong>Don't check the time</strong> — Clock-watching increases arousal and sleep anxiety. Turn your phone face-down or put your clock facing away.</li>
<li><strong>Don't pick up your phone</strong> — Even dimly lit screens increase cortisol and alertness. The dopamine hit of notifications makes returning to sleep much harder.</li>
<li><strong>Cognitive shuffle</strong> — Imagine a random series of unrelated images (a mango, a bicycle, a cloud, a shoe). This mimics the hypnagogic imagery of sleep onset and can help return you to sleep.</li>
<li><strong>Deep breathing</strong> — Slow, extended exhales (breath in 4, out 8) signal safety to the nervous system and promote drowsiness.</li>
</ul>
<blockquote><em>"Rest is not idleness, and to lie sometimes on the grass under trees on a summer's day, listening to the murmur of the water... is by no means a waste of time." — John Lubbock</em></blockquote>`,
            qr: ["I wake up at the same time every night", "My mind activates immediately when I wake", "I can't get back to sleep once awake", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Understanding Night Waking",
            text: `<h2>🌿 Intermediate: Understanding Night Waking</h2>
<p>Waking during the night is often normal — sleep cycles are 90 minutes, and brief wakings between cycles are natural. But when they're distressing or make return to sleep difficult, there's usually a cause worth addressing.</p>
<h3>Common Causes</h3>
<ul>
<li><strong>Alcohol</strong> — Alcohol is a sedative that disrupts the second half of the sleep cycle, causing early morning wakings. Even 1–2 drinks meaningfully disrupts sleep architecture.</li>
<li><strong>Cortisol rhythm issues</strong> — Waking between 3–4am is often associated with elevated cortisol (the body's wake signal). High stress, hypoglycaemia, or adrenal issues can cause this.</li>
<li><strong>Anxiety or stress</strong> — The brain activates problem-solving during early morning waking. The calm of night removes daytime distractions, and worries surge.</li>
<li><strong>Sleep apnoea</strong> — Repeated micro-wakings throughout the night, often without awareness. Signs: loud snoring, daytime fatigue, partner reports of breathing stops.</li>
</ul>
<h3>Interventions</h3>
<ul>
<li>Reduce alcohol, especially within 3 hours of bed. Stabilise blood sugar with a small protein snack before bed. Manage stress with an evening wind-down routine.</li>
</ul>
<blockquote><em>"Your future depends on your dreams, so go to sleep." — Mesut Barazany</em></blockquote>`,
            qr: ["I drink in the evenings", "I wake up anxious", "I might have sleep apnoea", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Sleep Architecture & Maintenance Insomnia",
            text: `<h2>🔥 Advanced: Sleep Architecture &amp; Maintenance Insomnia</h2>
<p>Understanding sleep architecture — the cycling structure of your sleep — helps explain why you're waking and what to do about it.</p>
<h3>Sleep Cycles</h3>
<ul>
<li>Sleep alternates between NREM (non-rapid eye movement) stages 1–3 and REM sleep in 90-minute cycles. Early night is dominated by deep NREM (restorative); later night by REM (memory consolidation, dreaming). Night waking is most common during light NREM or between cycles.</li>
</ul>
<h3>Maintenance Insomnia vs. Onset Insomnia</h3>
<ul>
<li>Maintenance insomnia (staying asleep) is clinically distinct from onset insomnia (falling asleep). They often have different causes and benefit from different interventions. CBT-I addresses both.</li>
</ul>
<h3>Sleep Restriction and Consolidation</h3>
<ul>
<li>CBT-I's sleep restriction technique builds sleep pressure (adenosine) by reducing time in bed, which consolidates fragmented sleep into fewer, longer bouts. It is counterintuitive but highly effective.</li>
</ul>
<h3>Hyperarousal</h3>
<ul>
<li>Many people with maintenance insomnia have elevated physiological and cognitive arousal at night — their nervous system is in a state of mild vigilance. This is often stress- or anxiety-related and responds to relaxation training and CBT-I.</li>
</ul>
<blockquote><em>"Sleep is the golden chain that ties health and our bodies together." — Thomas Dekker</em></blockquote>`,
            qr: ["I think I might have sleep apnoea", "My sleep feels shallow and unrefreshing", "Could anxiety be causing this?", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Persistent Night Waking & Clinical Help",
            text: `<h2>💎 Pro: Persistent Night Waking &amp; Clinical Help</h2>
<p>Persistent, distressing night waking that hasn't responded to self-help warrants medical and psychological assessment.</p>
<h3>Medical Conditions to Rule Out</h3>
<ul>
<li><strong>Sleep Apnoea</strong> — Requires a sleep study (polysomnography). Treated with CPAP. Significantly improves sleep quality.</li>
<li><strong>Restless Leg Syndrome</strong> — Uncomfortable leg sensations at rest. Responds to iron supplementation or medication.</li>
<li><strong>GERD / Acid Reflux</strong> — Often causes night waking. Respond to dietary changes and medication.</li>
<li><strong>Hormonal changes</strong> — Perimenopause, thyroid issues, and cortisol dysregulation can all disrupt sleep maintenance.</li>
</ul>
<h3>Psychological Treatment</h3>
<ul>
<li>CBT-I — delivered by a therapist or via digital programme — is first-line treatment for maintenance insomnia.</li>
<li>If anxiety is driving the night waking, treating the anxiety (CBT, medication) often resolves the sleep issue.</li>
</ul>
<h3>Resources</h3>
<ul>
<li>India: iCall <code>9152987821</code> | UK: NHS Sleep Clinics | US: <code>sleepfoundation.org</code> | Australia: <code>sleephealthfoundation.org.au</code></li>
</ul>
<blockquote><em>"Sleep is the interest we have to pay on the capital which is called in at death." — Arthur Schopenhauer</em></blockquote>`,
            qr: ["I need professional help", "I want to get a sleep study"]
          }
        ]
      },
      tiredness: {
        label: "Always Tired / No Energy",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: When Rest Doesn't Restore",
            text: `<h2>🌱 Basic: When Rest Doesn't Restore</h2>
<p>Feeling tired all the time — even after sleep — is one of the most common and most dismissal complaints in modern life. But persistent tiredness is a signal worth taking seriously. Your body is communicating something.</p>
<h3>Today</h3>
<ul>
<li><strong>Check sleep quality, not just quantity</strong> — 8 hours of broken, light sleep is not restorative. Focus on sleep quality: consistent wake time, no screens before bed, cool dark room.</li>
<li><strong>Stay hydrated</strong> — Even mild dehydration (1–2%) measurably reduces energy, concentration, and mood. Aim for 2–2.5 litres of water daily.</li>
<li><strong>Eat for energy</strong> — High-sugar, processed foods create energy spikes and crashes. Protein-rich meals with complex carbohydrates provide sustained energy.</li>
<li><strong>Move, even briefly</strong> — Counterintuitively, gentle exercise reduces fatigue. A 10-minute walk increases energy for up to 2 hours.</li>
</ul>
<blockquote><em>"Take care of your body. It's the only place you have to live." — Jim Rohn</em></blockquote>`,
            qr: ["I sleep a lot but still feel tired", "I have no energy in the mornings", "I feel exhausted but can't sleep", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Understanding Your Fatigue",
            text: `<h2>🌿 Intermediate: Understanding Your Fatigue</h2>
<p>Persistent tiredness has multiple potential causes — physical, psychological, and lifestyle-related. Identifying the type helps determine the right response.</p>
<h3>Types of Tiredness</h3>
<ul>
<li><strong>Physical fatigue</strong> — Muscle tiredness, physical depletion. Often from overexertion, poor nutrition, or illness.</li>
<li><strong>Mental fatigue</strong> — Cognitive exhaustion from decision-making, information processing, or focused work. Depletes willpower and attention.</li>
<li><strong>Emotional fatigue</strong> — From sustained emotional demands, conflict, or emotional labour. Often most intense in caregivers and emotionally demanding jobs.</li>
<li><strong>Existential fatigue</strong> — A loss of meaning and purpose. Even physically rested people feel drained when life lacks meaning.</li>
</ul>
<h3>Energy Audit</h3>
<ul>
<li>For one week, track your energy level (1–10) every 2 hours. Identify patterns: when are you highest and lowest? What precedes energy peaks and troughs? What consistently drains you?</li>
</ul>
<blockquote><em>"Almost everything will work again if you unplug it for a few minutes, including you." — Anne Lamott</em></blockquote>`,
            qr: ["My tiredness feels emotional or mental", "I feel drained by specific people or situations", "This has been going on for months", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: The Neuroscience of Fatigue",
            text: `<h2>🔥 Advanced: The Neuroscience of Fatigue</h2>
<p>Understanding the biological and psychological mechanisms of fatigue gives you more targeted tools to address it.</p>
<h3>Adenosine and Sleep Pressure</h3>
<ul>
<li>Adenosine builds up in the brain during wakefulness (sleep pressure) and is cleared during sleep. Caffeine blocks adenosine receptors — it doesn't remove the adenosine, just delays the feeling. When caffeine wears off, you feel the accumulated tiredness all at once (the "caffeine crash").</li>
</ul>
<h3>HPA Axis and Fatigue</h3>
<ul>
<li>Chronic psychological stress keeps the HPA axis activated, depleting cortisol reserves over time. This manifests as fatigue, especially in the mornings. This is the physiological basis of "burnout fatigue."</li>
</ul>
<h3>Depression and Fatigue</h3>
<ul>
<li>Fatigue is one of the most common symptoms of depression — often more prominent than sadness. If fatigue is accompanied by reduced pleasure, low mood, hopelessness, or changes in appetite/sleep, depression is worth considering.</li>
</ul>
<h3>Exercise Paradox</h3>
<ul>
<li>Regular moderate exercise reliably increases energy, even though it expends energy. This is because exercise improves mitochondrial efficiency, circadian rhythms, sleep quality, and mood — all fatigue contributors.</li>
</ul>
<blockquote><em>"Fatigue is the best pillow." — Benjamin Franklin</em></blockquote>`,
            qr: ["I think my fatigue might be depression", "I use a lot of caffeine to function", "Could my fatigue be physical/medical?", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: Chronic Fatigue & Medical Assessment",
            text: `<h2>💎 Pro: Chronic Fatigue &amp; Medical Assessment</h2>
<p>Persistent fatigue that doesn't resolve with sleep, rest, or lifestyle changes deserves medical assessment. There are numerous treatable physical and mental health conditions that cause fatigue.</p>
<h3>Medical Conditions to Rule Out</h3>
<ul>
<li><strong>Anaemia</strong> — Iron deficiency is extremely common, especially in menstruating people. Simple blood test.</li>
<li><strong>Hypothyroidism</strong> — Underactive thyroid is a major cause of fatigue, weight changes, and low mood. Blood test.</li>
<li><strong>Vitamin D / B12 deficiency</strong> — Both cause significant fatigue. Very common, easily tested and treated.</li>
<li><strong>Sleep Apnoea</strong> — Unrefreshing sleep and daytime fatigue. Requires sleep study.</li>
<li><strong>ME/CFS (Myalgic Encephalomyelitis / Chronic Fatigue Syndrome)</strong> — Post-exertional malaise as a hallmark. Specialist assessment needed.</li>
<li><strong>Depression</strong> — Fatigue is a cardinal symptom. Often treatable with therapy and/or medication.</li>
</ul>
<h3>Getting Help</h3>
<ul>
<li>Start with your GP. Request a blood panel including: FBC, thyroid function, ferritin, B12/folate, Vitamin D, and blood glucose.</li>
<li>India: iCall <code>9152987821</code> | US: <code>988</code> | UK: <code>116 123</code> | Australia: <code>13 11 14</code></li>
</ul>
<blockquote><em>"You cannot pour from an empty cup. Take care of yourself first."</em></blockquote>`,
            qr: ["I need professional help", "I want to get blood tests done"]
          }
        ]
      },
      nightmares: {
        label: "Nightmares / Disturbed Sleep",
        levels: [
          {
            level: "basic",
            icon: "🌱",
            title: "Basic: After a Nightmare",
            text: `<h2>🌱 Basic: After a Nightmare</h2>
<p>Waking from a nightmare can leave your heart pounding, your mind flooded with disturbing images, and your body in a state of physiological alarm — even when you know it was "just a dream." Your stress response is real. Here's how to recover.</p>
<h3>Right After Waking</h3>
<ul>
<li><strong>Orient yourself to safety</strong> — Say out loud or in your head: "I am in my bedroom. I am safe. The dream is over." Touch the wall, the bedframe. Use physical grounding to confirm you're in the present.</li>
<li><strong>Light and sound</strong> — Turning on a dim light and listening to calming music can interrupt the lingering dream state.</li>
<li><strong>Do not immediately try to sleep</strong> — Your nervous system needs 10–15 minutes to settle. Slow breathing, grounding, and reassurance first.</li>
</ul>
<h3>In the Morning</h3>
<ul>
<li>Write the nightmare down. Research suggests that writing it out reduces its emotional power (emotional processing through narrative).</li>
</ul>
<blockquote><em>"Even the darkest night will end, and the sun will rise." — Victor Hugo</em></blockquote>`,
            qr: ["I have recurring nightmares", "My nightmares feel very real", "I'm afraid to go to sleep", "I need more help"]
          },
          {
            level: "intermediate",
            icon: "🌿",
            title: "Intermediate: Understanding Nightmare Patterns",
            text: `<h2>🌿 Intermediate: Understanding Nightmare Patterns</h2>
<p>Occasional nightmares are universal. Frequent, distressing nightmares — especially recurring ones — often reflect something that deserves attention.</p>
<h3>Common Causes of Nightmares</h3>
<ul>
<li><strong>Stress and anxiety</strong> — The sleeping brain continues processing daytime worries. High waking stress correlates strongly with nightmare frequency.</li>
<li><strong>Certain medications</strong> — Beta-blockers, antidepressants (especially SSRIs during initiation), and blood pressure medications can increase vivid dreaming and nightmares.</li>
<li><strong>Alcohol</strong> — Disrupts REM sleep; dreams are more intense and disturbing during REM rebound when alcohol is withdrawn.</li>
<li><strong>Trauma</strong> — Trauma-related nightmares (often replicating or symbolising the traumatic event) are a hallmark of PTSD.</li>
</ul>
<h3>Nightmare Diary</h3>
<ul>
<li>Keep a nightmare diary — theme, emotional tone, how often. Over time, patterns emerge that give useful information about what your mind is processing.</li>
</ul>
<blockquote><em>"The interpretation of dreams is the royal road to a knowledge of the unconscious mind." — Sigmund Freud</em></blockquote>`,
            qr: ["I think my nightmares are trauma-related", "My nightmares started when I began a new medication", "I have the same nightmare repeatedly", "Tell me the next level"]
          },
          {
            level: "advanced",
            icon: "🔥",
            title: "Advanced: Imagery Rehearsal Therapy (IRT)",
            text: `<h2>🔥 Advanced: Imagery Rehearsal Therapy (IRT)</h2>
<p>For chronic nightmares, especially trauma-related ones, there is an evidence-based psychological treatment specifically designed for this: Imagery Rehearsal Therapy (IRT).</p>
<h3>What Is IRT?</h3>
<ul>
<li>Developed by Dr. Barry Krakow, IRT involves: selecting a recurring nightmare, changing the narrative (any change — it doesn't need to resolve the dream, just alter it), and rehearsing the new narrative repeatedly during waking hours.</li>
<li>By changing and rehearsing a new dream script, the nightmare's neural pathway is interrupted and gradually weakens. Effective in 6–8 weeks for many people.</li>
</ul>
<h3>PTSD and Nightmares</h3>
<ul>
<li>Nightmares are a formal diagnostic criterion for PTSD. In PTSD, trauma memories are stored differently — as fragmented, sensory-rich intrusions rather than narrative memories. This is why nightmares replay trauma in non-linear, disturbing ways.</li>
<li>Prazosin (an antihypertensive medication) has good evidence specifically for PTSD nightmares.</li>
</ul>
<h3>Lucid Dreaming Techniques</h3>
<ul>
<li>Some people learn to recognise within a dream that they are dreaming, allowing them to alter the nightmare consciously. Techniques like MILD (Mnemonic Induction of Lucid Dreams) can help, though effectiveness varies.</li>
</ul>
<blockquote><em>"In dreams, we enter a world that's entirely our own." — J.K. Rowling</em></blockquote>`,
            qr: ["I want to try IRT", "I think I have PTSD", "How do I learn lucid dreaming?", "I need professional support"]
          },
          {
            level: "pro",
            icon: "💎",
            title: "Pro: PTSD Nightmares & Clinical Treatment",
            text: `<h2>💎 Pro: PTSD Nightmares &amp; Clinical Treatment</h2>
<p>Severe, frequent, or trauma-related nightmares that significantly impair your life deserve specialised professional assessment and treatment. You don't have to live with this.</p>
<h3>Nightmare Disorder vs. PTSD</h3>
<ul>
<li><strong>Nightmare Disorder</strong> — Repeated, distressing nightmares causing significant impairment, not necessarily trauma-related.</li>
<li><strong>PTSD with nightmare criterion</strong> — Recurrent distressing dreams related to a traumatic event. Nightmares are often the most impairing PTSD symptom.</li>
</ul>
<h3>Evidence-Based Clinical Treatments</h3>
<ul>
<li><strong>Imagery Rehearsal Therapy (IRT)</strong> — Most evidence-based psychological treatment for nightmares. Delivered by a trained therapist.</li>
<li><strong>EMDR</strong> — Highly effective for PTSD including nightmare components. Processes the underlying trauma.</li>
<li><strong>CPT (Cognitive Processing Therapy)</strong> — PTSD treatment with evidence for nightmares.</li>
<li><strong>Prazosin</strong> — An alpha-blocker with specific evidence for PTSD nightmares. GP or psychiatrist prescription.</li>
</ul>
<h3>If You're in Distress Now</h3>
<ul>
<li>India: Vandrevala Foundation <code>1860-2662-345</code> (24/7) | iCall <code>9152987821</code></li>
<li>US: <code>988</code> | Crisis Text Line: text HOME to <code>741741</code></li>
<li>UK: Samaritans <code>116 123</code> | PTSD UK <code>ptsduk.org</code></li>
<li>Australia: Lifeline <code>13 11 14</code></li>
</ul>
<blockquote><em>"Healing from trauma is possible. You do not have to carry this alone."</em></blockquote>`,
            qr: ["I need professional help", "I think I have PTSD — what's the next step?"]
          }
        ]
      }
    },
    subQR: ["Can't fall asleep", "Waking up during the night", "Always tired / no energy", "Nightmares / disturbed sleep"]
  }

}; // end DATASET
