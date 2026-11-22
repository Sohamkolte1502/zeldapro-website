import {
  serviceBySlug,
  solutionBySlug,
  solutions,
  type Industry,
  type Service,
  type Solution,
} from '../data'

export function solutionsForService(service: Service): Solution[] {
  return solutions.filter((solution) =>
    solution.relatedServiceSlugs.includes(service.slug),
  )
}

export function servicesForSolution(solution: Solution) {
  return solution.relatedServiceSlugs
    .map((slug) => serviceBySlug[slug])
    .filter(Boolean)
}

export function servicesForIndustry(industry: Industry) {
  return industry.relatedServiceSlugs
    .map((slug) => serviceBySlug[slug])
    .filter(Boolean)
}

export function solutionsForIndustry(industry: Industry) {
  return industry.relatedSolutionSlugs
    .map((slug) => solutionBySlug[slug])
    .filter(Boolean)
}