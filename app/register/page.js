import RegistrationForm from '@/components/ReagistrationForm';

export default function Register() {
  return (
    <main className="flex h-screen">
      <div className="w-1/3 flex justify-center items-center">
        <RegistrationForm />
      </div>
      <div className="w-2/3 bg-[#0f0f16] flex items-center justify-center">
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="w-1/4 objcet-contain"
          src="/login.png"
          alt="login image"
        />
      </div>
    </main>
  );
}
