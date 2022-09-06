import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="call-to-all-join-hands"
      className="relative overflow-hidden pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl">
            Come out and Help Them
          </h2>
          <p className="mt-4 text-lg tracking-tight text-black">
            It&apos;s time to help saving precious lives. Be the part of communities
            or work with local and international welfare organizations or government departments that need your help for flood victims
            across Pakistan from mobilization to raising voice.
          </p>
          <Button
            href="https://forms.gle/8GXomnawWxiQu76D7"
            color="blue"
            className="mt-10"
          >
            Become Volunteer
          </Button>
        </div>
      </Container>
    </section>
  )
}
