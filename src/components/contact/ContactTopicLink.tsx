import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ContactTopic } from '../../data/contactTopics'
import { contactTopicPath } from '../../utils/contactPaths'

type ContactTopicLinkProps = {
  topic: ContactTopic
}

export function ContactTopicLink({ topic }: ContactTopicLinkProps) {
  return (
    <Link
      to={contactTopicPath(topic.slug)}
      className="group flex min-h-[3.5rem] items-start gap-2 border-b-2 border-electric-500/35 pb-3 text-left text-lg font-medium text-brand-950 transition-colors hover:border-electric-500 hover:text-electric-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-600 sm:text-xl"
    >
      <span className="min-w-0 flex-1 leading-snug">{topic.title}</span>
      <ArrowUpRight
        size={20}
        className="mt-0.5 shrink-0 text-electric-500 opacity-70 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
        aria-hidden
      />
    </Link>
  )
}