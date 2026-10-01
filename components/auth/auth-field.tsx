import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AuthFieldProps = React.ComponentProps<typeof Input> & {
  label: string;
  name: string;
  errors?: string[];
};

export function AuthField({ label, name, errors, ...props }: AuthFieldProps) {
  const errorId = `${name}-error`;
  return (
    <div className="flex flex-col gap-2">
      <Label
        htmlFor={name}
        className="text-sm leading-[1.2] font-medium text-ink"
      >
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        aria-invalid={errors?.length ? true : undefined}
        aria-describedby={errors?.length ? errorId : undefined}
        className="h-[52px] rounded-xl border-gray-100 bg-white px-6 text-lg md:text-lg placeholder:text-gray-400"
        {...props}
      />
      {errors?.length ? (
        <ul
          id={errorId}
          className="flex flex-col gap-0.5 text-sm text-destructive"
        >
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
