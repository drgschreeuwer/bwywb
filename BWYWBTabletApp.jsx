import React, { useState } from 'react'

const VIEWS = {
  ONBOARD: 'ONBOARD',
  DASH: 'DASH',
  HUB: 'HUB',
  SPEAK: 'SPEAK',
  MENTOR: 'MENTOR',
  PROJECTS: 'PROJECTS',
  PARENT: 'PARENT',
  LESSON: 'LESSON',
}

function Card({ children, className='' }) {
  return <div className={`rounded-2xl border bg-white ${className}`}>{children}</div>
}
function CardContent({ children, className='' }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}
function Button({ children, onClick, variant='default', className='', disabled }) {
  const base = 'px-4 py-2 rounded-xl text-sm font-semibold transition active:scale-[.99]'
  const styles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-blue-100 text-blue-900 hover:bg-blue-200',
    outline: 'border border-gray-300 bg-white hover:bg-gray-50',
    ghost: 'bg-transparent hover:bg-gray-100',
  }
  return <button disabled={disabled} onClick={onClick} className={`${base} ${styles[variant]} ${disabled?'opacity-60 cursor-not-allowed':''} ${className}`}>{children}</button>
}
function Progress({ value=0, className='' }) {
  return (
    <div className={`h-2 bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <div className="h-full bg-blue-600" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  )
}

function Header({ role, setRole, goHome }) {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-500 grid place-items-center text-white font-bold">BW</div>
        <div>
          <h1 className="text-3xl font-extrabold text-blue-800 leading-tight">Be Who You Wanna Be</h1>
          <p className="text-xs text-blue-700/70 -mt-1">Discover • Build • Share • Thrive</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">View as</span>
        <div className="rounded-xl bg-white shadow px-1 py-1 flex">
          <Button variant={role==='kid'?'default':'ghost'} onClick={() => setRole('kid')} className="rounded-xl">Kid</Button>
          <Button variant={role==='parent'?'default':'ghost'} onClick={() => setRole('parent')} className="rounded-xl">Parent/Teacher</Button>
        </div>
        <Button variant="outline" onClick={goHome}>Home</Button>
      </div>
    </header>
  )
}

function Onboarding({ start }) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <Card className="col-span-12">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Welcome!</h2>
          <p className="text-gray-700 mb-4">Discover your values, explore your passions, and connect with mentors to build your future — your way.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/70 p-4 border">
              <h3 className="font-semibold mb-2">Step 1 — Quick Values Check</h3>
              <p className="text-sm text-gray-600 mb-4">Pick the pictures you like most. We'll turn your choices into your top values.</p>
              <Button onClick={start}>Start Your Journey</Button>
            </div>
            <div className="rounded-2xl bg-white/70 p-4 border">
              <h3 className="font-semibold mb-2">What you'll see next</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Personal dashboard with activities</li>
                <li>Learning Hub (Entrepreneurship & Financial Mastery + more)</li>
                <li>Speakers Corner to present and share</li>
                <li>Mentorship Pathway to shadow real pros</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function Tile({ title, desc, onClick }) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </CardContent>
    </Card>
  )
}

function Dashboard({ open }) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <Card className="col-span-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-1">Your Dashboard</h2>
          <p className="text-gray-600 mb-4">Daily picks based on your top values: Creativity, Building, Storytelling</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border p-4 bg-white">
              <h4 className="font-semibold">Today's Quest</h4>
              <p className="text-sm text-gray-600 mb-2">Design a lemonade stand and price your cups.</p>
              <Progress value={42} className="mb-3" />
              <Button onClick={() => open(VIEWS.HUB)}>Open Lesson</Button>
            </div>
            <div className="rounded-2xl border p-4 bg-white">
              <h4 className="font-semibold">Speakers Corner</h4>
              <p className="text-sm text-gray-600 mb-2">Record a 60‑sec pitch for your stand.</p>
              <Button variant="secondary" onClick={() => open(VIEWS.SPEAK)}>Go to Studio</Button>
            </div>
            <div className="rounded-2xl border p-4 bg-white">
              <h4 className="font-semibold">Mentorship Match</h4>
              <p className="text-sm text-gray-600 mb-2">Shadow a local café owner for a week.</p>
              <Button variant="outline" onClick={() => open(VIEWS.MENTOR)}>See Mentors</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="col-span-12 grid md:grid-cols-4 gap-6">
        <Tile title="Learning Hub" desc="Interactive lessons in entrepreneurship, money, creativity, and more." onClick={() => open(VIEWS.HUB)} />
        <Tile title="Speakers Corner" desc="Record and share your presentations safely." onClick={() => open(VIEWS.SPEAK)} />
        <Tile title="Mentorship Pathway" desc="Apply to shadow mentors and reflect with guided steps." onClick={() => open(VIEWS.MENTOR)} />
        <Tile title="Community Projects" desc="Join challenges and collaborate to solve real problems." onClick={() => open(VIEWS.PROJECTS)} />
      </div>
    </div>
  )
}

function LearningHub({ back, openLesson }) {
  const modules = [
    { key: 'E101', title: 'Entrepreneurship 101', time: '20 min', status: 70, summary: 'Design, test, and sell ideas that matter.' },
    { key: 'MBAS', title: 'Money Basics', time: '15 min', status: 30, summary: 'Earn, spend, save, and give with purpose.' },
    { key: 'CRTV', title: 'Creativity Sprint', time: '10 min', status: 0, summary: 'Think divergently and prototype quickly.' },
  ]
  return (
    <div className="grid grid-cols-12 gap-6">
      <Card className="col-span-12">
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Learning Hub</h2>
            <Button variant="outline" onClick={back}>Back</Button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {modules.map(m => (
              <div key={m.key} className="rounded-2xl border p-4 bg-white">
                <h4 className="font-semibold mb-1">{m.title}</h4>
                <p className="text-sm text-gray-600 mb-2">Approx. {m.time}</p>
                <p className="text-sm text-gray-700 mb-3">{m.summary}</p>
                <Progress value={m.status} className="mb-3" />
                <Button onClick={() => openLesson(m)}>Start</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function LessonView({ lesson, back }) {
  const [step, setStep] = useState(0)

  const content = {
    E101: [
      { t: 'Idea → Customer', d: 'Pick a product kids at your school would actually buy.' },
      { t: 'Test Quickly', d: 'Ask 3 classmates: would you buy this for $2? Why/why not?' },
      { t: 'Refine & Launch', d: 'Use their answers to improve your offer and choose a price.' },
    ],
    MBAS: [
      { t: 'Earn', d: 'Ways your stand makes money: price × cups sold.' },
      { t: 'Spend', d: 'List your costs: lemons, sugar, cups, sign.' },
      { t: 'Save & Give', d: 'Decide what % to save and what % to give.' },
    ],
    CRTV: [
      { t: 'Diverge', d: 'Sketch 5 wild stand designs in 3 minutes.' },
      { t: 'Converge', d: 'Circle your top 2 ideas and combine them.' },
      { t: 'Prototype', d: 'Build a paper model and share it at Speakers Corner.' },
    ],
  }

  const steps = content[lesson?.key] ?? []

  return (
    <div className="grid grid-cols-12 gap-6">
      <Card className="col-span-12">
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">{lesson?.title || 'Lesson'}</h2>
            <Button variant="outline" onClick={back}>Back</Button>
          </div>
          <div className="rounded-2xl border p-6 bg-white">
            <h3 className="text-xl font-semibold mb-2">{steps[step]?.t || 'Done!'}</h3>
            <p className="text-gray-700 mb-6">{steps[step]?.d || 'You\'ve completed this mini-lesson.'}</p>
            <div className="flex items-center gap-3">
              <Progress value={Math.min((step / Math.max(steps.length, 1)) * 100, 100)} className="max-w-sm" />
              <span className="text-sm text-gray-600">Step {Math.min(step + 1, steps.length)} of {steps.length}</span>
            </div>
            <div className="mt-6 flex gap-3">
              <Button variant="outline" onClick={() => setStep(s => Math.max(s - 1, 0))} disabled={step === 0}>Back</Button>
              {step < steps.length - 1 ? (
                <Button onClick={() => setStep(s => Math.min(s + 1, steps.length - 1))}>Next</Button>
              ) : (
                <Button onClick={back}>Finish</Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function SpeakersCorner({ back }) {
  const [isRecording, setIsRecording] = useState(false)
  const [hasClip, setHasClip] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)

  const startRec = () => { setIsRecording(true); setHasClip(false); setUploaded(false) }
  const stopRec = () => { setIsRecording(false); setHasClip(true) }
  const upload = async () => {
    setUploading(true)
    await new Promise(r => setTimeout(r, 1200))
    setUploading(false)
    setUploaded(true)
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      <Card className="col-span-12">
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Speakers Corner</h2>
            <Button variant="outline" onClick={back}>Back</Button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-4 bg-white">
              <h4 className="font-semibold mb-2">Record a 60‑sec talk</h4>
              <p className="text-sm text-gray-600 mb-4">Topic: "My dream stand and why people will love it"</p>
              {!isRecording && !hasClip && (
                <Button onClick={startRec} className="bg-red-600 hover:bg-red-700 text-white">Start Recording</Button>
              )}
              {isRecording && (
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-sm">Recording…</span>
                  <Button variant="secondary" onClick={stopRec}>Stop</Button>
                </div>
              )}
              {hasClip && !uploaded && (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-700">Clip ready (58s)</span>
                  <Button onClick={upload} disabled={uploading}>{uploading ? 'Uploading…' : 'Upload'}</Button>
                </div>
              )}
              {uploaded && (
                <div className="text-sm text-green-700">Uploaded! Awaiting teacher review. ETA: 2 days</div>
              )}
            </div>
            <div className="rounded-2xl border p-4 bg-white">
              <h4 className="font-semibold mb-2">Recent Uploads</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Pitch v2 — 58s — awaiting teacher feedback</li>
                {uploaded && <li>• Lemonade Stand Pitch — 60s — uploaded just now</li>}
                <li>• Story draft — 41s — parent comment added</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function Mentorship({ back }) {
  const mentors = [
    { name: 'Ava Chen', role: 'Café Owner', slots: 'Next week', focus: 'Pricing, customer flow' },
    { name: 'Luca Rossi', role: 'Market Stall Founder', slots: '2 weeks', focus: 'Branding, signage' },
  ]
  return (
    <div className="grid grid-cols-12 gap-6">
      <Card className="col-span-12">
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Mentorship Pathway</h2>
            <Button variant="outline" onClick={back}>Back</Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {mentors.map(m => (
              <div key={m.name} className="rounded-2xl border p-4">
                <h4 className="font-semibold">{m.name}</h4>
                <p className="text-sm text-gray-600">{m.role}</p>
                <p className="text-sm text-gray-600">Slots: {m.slots}</p>
                <p className="text-sm text-gray-600 mb-3">Focus: {m.focus}</p>
                <Button>Apply to Shadow</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function CommunityProjects({ back }) {
  const items = [
    { title: 'Kindness Vending Machine', team: 'Open', due: 'Fri' },
    { title: 'Zero‑Waste Canteen', team: '3/5', due: 'Next Mon' },
  ]
  return (
    <div className="grid grid-cols-12 gap-6">
      <Card className="col-span-12">
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Community Projects</h2>
            <Button variant="outline" onClick={back}>Back</Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {items.map(it => (
              <div key={it.title} className="rounded-2xl border p-4">
                <h4 className="font-semibold">{it.title}</h4>
                <p className="text-sm text-gray-600">Team: {it.team}</p>
                <p className="text-sm text-gray-600 mb-3">Due: {it.due}</p>
                <Button variant="secondary">Join</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ParentPortal({ back }) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <Card className="col-span-12">
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Parent/Teacher Portal</h2>
            <Button variant="outline" onClick={back}>Back</Button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border p-4">
              <h4 className="font-semibold mb-2">Progress Overview</h4>
              <p className="text-sm text-gray-600">Entrepreneurship 101 — 70% • Money Basics — 30%</p>
            </div>
            <div className="rounded-2xl border p-4">
              <h4 className="font-semibold mb-2">Feedback Queue</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Pitch v2 — Review by Fri</li>
                <li>• Pricing worksheet — Auto‑graded</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-4">
              <h4 className="font-semibold mb-2">Suggestions</h4>
              <p className="text-sm text-gray-600">Try the "Creativity Sprint" to balance skills this week.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function BWYWBTabletApp() {
  const [view, setView] = useState(VIEWS.ONBOARD)
  const [role, setRole] = useState('kid')
  const [activeLesson, setActiveLesson] = useState(null)

  const goHome = () => setView(role === 'parent' ? VIEWS.PARENT : VIEWS.DASH)

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-amber-50 to-white p-6">
      <Header role={role} setRole={(r) => { setRole(r); setView(r === 'parent' ? VIEWS.PARENT : VIEWS.DASH) }} goHome={goHome} />

      {view === VIEWS.ONBOARD && <Onboarding start={() => setView(VIEWS.DASH)} />}
      {view === VIEWS.DASH && <Dashboard open={setView} />}
      {view === VIEWS.HUB && (
        <LearningHub
          back={() => setView(VIEWS.DASH)}
          openLesson={(lesson) => { setActiveLesson(lesson); setView(VIEWS.LESSON) }}
        />
      )}
      {view === VIEWS.LESSON && (
        <LessonView lesson={activeLesson} back={() => setView(VIEWS.HUB)} />
      )}
      {view === VIEWS.SPEAK && <SpeakersCorner back={() => setView(VIEWS.DASH)} />}
      {view === VIEWS.MENTOR && <Mentorship back={() => setView(VIEWS.DASH)} />}
      {view === VIEWS.PROJECTS && <CommunityProjects back={() => setView(VIEWS.DASH)} />}
      {view === VIEWS.PARENT && <ParentPortal back={() => setView(VIEWS.DASH)} />}

      <footer className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Be Who You Wanna Be. All rights reserved.
      </footer>
    </div>
  )
}
