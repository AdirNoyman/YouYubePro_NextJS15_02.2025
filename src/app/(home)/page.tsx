import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.svg" alt="logo" width={50} height={50} />
      <p className='text-xl font-semibold tracking-tight'>New Tube</p>
    </div>
  );
}
