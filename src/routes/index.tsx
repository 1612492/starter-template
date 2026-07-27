import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Blocks,
  CheckCircle2,
  Code2,
  GitBranch,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const stack = [
  { name: "TanStack Router", detail: "File-based routing with type safety." },
  { name: "TanStack Query", detail: "Data fetching and cache management." },
  { name: "shadcn/ui", detail: "Accessible primitives with a clean system." },
  {
    name: "Tailwind CSS",
    detail: "Utility-first styling with fast iteration.",
  },
  { name: "Vite", detail: "A fast local dev loop and lean production build." },
];

const benefits = [
  {
    icon: Blocks,
    title: "A solid starting shape",
    description:
      "The starter gives you routing, query, and UI patterns already aligned so you can focus on product work.",
  },
  {
    icon: ShieldCheck,
    title: "Accessible by default",
    description:
      "Use the shadcn/ui components as the base for consistent, keyboard-friendly interactions.",
  },
  {
    icon: Zap,
    title: "Fast to extend",
    description:
      "Everything is small, composable, and easy to replace as the app grows without a rewrite.",
  },
];

const nextSteps = [
  {
    step: "01",
    title: "Swap in your first route",
    description:
      "Replace placeholder content with your product landing page or app shell.",
  },
  {
    step: "02",
    title: "Connect real data",
    description:
      "Wire TanStack Query to your API and keep loading, error, and empty states tidy.",
  },
  {
    step: "03",
    title: "Shape the visual system",
    description:
      "Tune the colors, spacing, and copy to match your brand and audience.",
  },
];

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(37,99,235,0.14),_transparent_30%),linear-gradient(to_bottom,_rgba(248,250,252,0.8),_transparent_28%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(59,130,250,0.16),_transparent_30%),linear-gradient(to_bottom,_rgba(255,255,255,0.02),_transparent_24%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[linear-gradient(115deg,rgba(15,23,42,0.08),transparent_40%,rgba(37,99,235,0.08)_68%,transparent_90%)] opacity-70 dark:bg-[linear-gradient(115deg,rgba(255,255,255,0.08),transparent_40%,rgba(96,165,250,0.14)_68%,transparent_90%)]" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl border border-border/70 bg-card shadow-sm shadow-black/5">
              <Sparkles className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium leading-none">
                TanStack Starter
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                A clean base for polished product experiences.
              </p>
            </div>
          </div>
          <Badge
            variant="outline"
            className="hidden rounded-full px-3 py-1 sm:inline-flex"
          >
            Router • Query • shadcn/ui
          </Badge>
        </header>

        <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="max-w-2xl">
            <Badge className="mb-5 rounded-full px-3 py-1 text-[0.72rem] tracking-[0.2em] uppercase">
              Built for shipping
            </Badge>
            <h1 className="font-heading max-w-xl text-4xl leading-[0.95] font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              A polished TanStack starter for modern apps.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Start with routing, data fetching, and reusable UI already in
              place. Then shape the experience into something distinctly yours.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                nativeButton={false}
                render={<a href="#stack" />}
              >
                Explore the stack
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#next-steps" />}
              >
                See next steps
              </Button>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {[
                "File-based routing",
                "Cache-aware data flows",
                "Accessible UI primitives",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-2xl border border-border/60 bg-card/70 px-4 py-3 backdrop-blur"
                >
                  <CheckCircle2 className="size-4 text-foreground/80" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="relative overflow-hidden border-border/70 bg-card/80 shadow-2xl shadow-black/5 backdrop-blur">
            <CardHeader className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="rounded-full px-2.5 py-0.5"
                >
                  Starter snapshot
                </Badge>
              </div>
              <CardTitle className="text-2xl">
                Everything you need to begin well.
              </CardTitle>
              <CardDescription className="text-base">
                A balanced foundation with thoughtful defaults, ready to become
                a dashboard, marketing site, or full product UI.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                ["Routing", "TanStack Router with a file-based route setup."],
                ["Fetching", "TanStack Query wired for reliable client state."],
                ["UI", "shadcn/ui components styled with Tailwind."],
                ["Build", "Vite for quick feedback and lean output."],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/70 px-4 py-3"
                >
                  <div className="mt-0.5 size-2 rounded-full bg-foreground/70" />
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <Card
                key={benefit.title}
                className="border-border/70 bg-card/80 backdrop-blur transition-transform duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-3 flex size-11 items-center justify-center rounded-2xl border border-border/70 bg-muted/60">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </section>

        <section
          id="stack"
          className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start"
        >
          <div className="space-y-4">
            <Badge variant="outline" className="rounded-full px-3 py-1">
              Stack overview
            </Badge>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              A focused stack that helps you move from scaffold to product.
            </h2>
            <p className="max-w-xl text-muted-foreground">
              The starter stays intentionally small, but it gives you the parts
              that matter most: routing, state, styling, and a component system
              that feels ready from day one.
            </p>

            <Card className="border-border/70 bg-card/80">
              <CardContent className="space-y-3 p-5">
                {stack.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-4 border-b border-border/60 pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                    <Badge variant="secondary" className="rounded-full">
                      Ready
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4">
            <Card className="border-border/70 bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Code2 className="size-5" />
                  Why it feels good to use
                </CardTitle>
                <CardDescription>
                  A starter should lower friction and raise confidence.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Type-safe routes", "Less guessing as your app scales."],
                  [
                    "Responsive defaults",
                    "Layouts that adapt without extra work.",
                  ],
                  ["Reusable patterns", "Primitives you can compose quickly."],
                  [
                    "Clean handoff",
                    "Easy for a team to understand and extend.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-border/60 bg-muted/40 p-4"
                  >
                    <p className="font-medium">{title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/80">
              <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Want to start building now?</p>
                  <p className="text-sm text-muted-foreground">
                    Hook up your first screen, ship the core flow, and refine
                    from there.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="sm:self-start"
                  nativeButton={false}
                  render={<a href="#next-steps" />}
                >
                  Get the next steps
                  <ArrowRight />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section id="next-steps" className="space-y-6 pb-6">
          <div className="max-w-2xl space-y-3">
            <Badge variant="outline" className="rounded-full px-3 py-1">
              Next steps
            </Badge>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Make the starter your own.
            </h2>
            <p className="text-muted-foreground">
              A few focused moves will take this from a scaffold to a real
              product surface.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {nextSteps.map((item) => (
              <Card key={item.step} className="border-border/70 bg-card/80">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <Badge
                      variant="secondary"
                      className="rounded-full px-2.5 py-0.5 text-xs tracking-[0.18em]"
                    >
                      {item.step}
                    </Badge>
                    <GitBranch className="size-4 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="border-border/70 bg-primary text-primary-foreground">
            <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl space-y-2">
                <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary-foreground/70">
                  <Rocket className="size-4" />
                  Ready when you are
                </p>
                <p className="text-xl font-medium sm:text-2xl">
                  Build the first version, then make it beautiful.
                </p>
              </div>
              <Button
                variant="secondary"
                size="lg"
                nativeButton={false}
                render={<a href="#stack" />}
              >
                Review the stack
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
