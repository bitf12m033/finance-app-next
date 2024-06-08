'use client'

import AlertError from '@/components/alert/alert-error'
import AlertSuccess from '@/components/alert/alert-success'
import DateRangeSelect from '@/components/dateRangeSelect/dateRangeSelect'
import Input from '@/components/input/input'
import Label from '@/components/label/label'
import SubmitButton from '@/components/submitButton/submitButton'
import { updateSettings } from '@/lib/actions'
import { useFormState } from 'react-dom'

const initialState = {
  message: '',
  error: false
}

export default function SettingsForm({ defaults }) {
  console.log(defaults)
  const [state, formAction] = useFormState(updateSettings, initialState)
  return (
    <form className="space-y-4" action={formAction}>
      {state?.error && (
        <AlertError>{state?.message}</AlertError>
      )}
      {!state?.error && state?.message.length > 0 && (
        <AlertSuccess>{state?.message}</AlertSuccess>
      )}

      <Label htmlFor="fullName">User full name</Label>
      <Input type="text" name="fullName" id="fullName" placeholder="User full name" defaultValue={defaults?.fullName} />

      <Label htmlFor="defaultView">Default transactions view</Label>
      <DateRangeSelect name="defaultView" id="defaultView" defaultValue={defaults?.defaultView} />

      <SubmitButton>Update Settings</SubmitButton>
    </form>
  );
}