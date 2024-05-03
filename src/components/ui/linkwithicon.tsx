import Link from "next/link";

type Props = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

export function LinkWithIcon({ label, icon, href }: Props) {
  return (
    <div className="group hover:bg-accent flex items-center p-2 space-x-2 rounded-sm">
      <div className="group-hover:animate-bounce">{icon}</div>
      <Link href={href}>
        <button className="bg-transparent text-black font-medium group-hover:bg-accent">
          {label}
        </button>
      </Link>
    </div>
  );
}
