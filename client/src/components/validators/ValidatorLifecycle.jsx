export default function ValidatorLifecycle() {
  return (
    <section className="max-w-4xl mx-auto space-y-6 border-t border-white/10 pt-12">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Validator lifecycle
      </h2>

      <ul className="space-y-3 text-white/75">
        <li>• Create validator and bond stake</li>
        <li>• Enter active set and begin proposing blocks</li>
        <li>• Accrue rewards and participate in governance</li>
        <li>• Exit or unbond according to protocol rules</li>
      </ul>
    </section>
  );
}