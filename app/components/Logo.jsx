import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="hidden lg:flex">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          className="h-6 w-auto"
          width={100}
          height={24}
          priority
        />
      </Link>
    </div>
  );
}
