declare module "micromorph" {
  export default function micromorph(
    oldEl: Element | DocumentFragment,
    newEl: Element | DocumentFragment,
    options?: {
      hooks?: {
        beforeNodeUpdated?: (fromEl: Element, toEl: Element) => boolean | void
        afterNodeUpdated?: (fromEl: Element, toEl: Element) => void
        beforeNodeRemoved?: (node: Element) => boolean | void
        afterNodeRemoved?: (node: Element) => void
        beforeNodeAdded?: (node: Element, parent: Element) => boolean | void
        afterNodeAdded?: (node: Element) => void
      }
    }
  ): boolean
}