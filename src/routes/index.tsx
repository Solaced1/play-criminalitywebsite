import {
  Activity,
  Axe,
  Clipboard,
  Crown,
  Radio,
  ShieldAlert,
  Skull,
  Swords,
  Zap,
} from 'lucide-react'
import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: CriminalityHome,
})

const serverStats = [
  { label: 'Active crews', value: '18' },
  { label: 'Weekly events', value: '7' },
  { label: 'Combat zones', value: '12' },
]

const discordInvite = 'https://discord.gg/FYWBKpa7EM'
const inviteCode = '2P5ILES4'

const features = [
  {
    icon: Swords,
    title: 'Unique Multicraft PVP',
    text: 'Build a crew, raid enemy claims, and fight for control across brutal red zones.',
  },
  {
    icon: ShieldAlert,
    title: 'High-risk economy',
    text: 'Trade, loot, smuggle, and protect your stash while rival players hunt the same haul.',
  },
  {
    icon: Crown,
    title: 'Kill Bounty Players',
    text: 'Earn street rank through combat, contracts, territory wins, and server events.',
  },
]

const rules = ['No griefing protected builds', 'Respect staff calls', 'Keep combat clean']

function CriminalityHome() {
  const [copyStatus, setCopyStatus] = useState('Copy Invite Code')

  const copyInviteCode = async () => {
    try {
      await navigator.clipboard.writeText(inviteCode)
      setCopyStatus('Copied')
    } catch {
      setCopyStatus(inviteCode)
    }
    window.setTimeout(() => setCopyStatus('Copy Invite Code'), 1800)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--void)] text-[var(--bone)]">
      <section className="hero-shell relative min-h-screen px-5 pb-14 pt-6 sm:px-8 lg:px-12">
        <div className="scanline" />
        <div className="ember ember-one" />
        <div className="ember ember-two" />
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between border-b border-red-500/20 pb-5">
          <div className="flex items-center gap-3">
            <div className="brand-mark">
              <Skull size={23} strokeWidth={2.4} />
            </div>
            <span className="font-display text-xl uppercase tracking-[0.16em] text-white">
              Criminality
            </span>
          </div>
          <a
            className="discord-link"
            href={discordInvite}
            target="_blank"
            rel="noreferrer"
          >
            <Radio size={17} />
            Discord
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
          <div className="max-w-4xl">
            <div className="status-chip">
              <Activity size={16} />
              MultiCraft survival server
            </div>
            <h1 className="hero-title mt-8">
              Criminality
              <span>Missions & Banks fully loaded.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              A red-and-black MultiCraft server built around crews, risky
              trades, tense raids, and glow-lit city warfare.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a className="primary-action" href="#join">
                Join the server
                <Zap size={19} />
              </a>
              <a className="secondary-action" href="#features">
                View gameplay
              </a>
            </div>
          </div>

          <aside className="server-panel">
            <div className="panel-topline">
              <span>Crew Uplink</span>
              <span className="live-dot">Online</span>
            </div>
            <div className="map-grid">
              <div className="map-core">
                <Axe size={46} />
              </div>
              <span className="map-node node-a" />
              <span className="map-node node-b" />
              <span className="map-node node-c" />
            </div>
            <div className="stats-grid">
              {serverStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="features" className="section-band px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">What players enter</p>
            <h2 className="section-title">A server made for pressure.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <article className="feature-card" key={feature.title}>
                  <Icon size={30} />
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="join" className="join-band px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-kicker">Ready up</p>
            <h2 className="section-title">Claim a place in Criminality.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
              Use the invite code in MultiCraft or jump straight into the
              Discord server to squad up before the next raid.
            </p>
          </div>
          <div className="join-card">
            <div>
              <span>Server Invite Code</span>
              <strong>{inviteCode}</strong>
            </div>
            <div>
              <span>Discord</span>
              <a href={discordInvite} target="_blank" rel="noreferrer">
                discord.gg/FYWBKpa7EM
              </a>
            </div>
            <button className="copy-invite" type="button" onClick={copyInviteCode}>
              <Clipboard size={18} />
              {copyStatus}
            </button>
            <ul>
              {rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
