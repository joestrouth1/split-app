/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useState, useRef, useMemo, FormEventHandler, ChangeEvent } from 'react'
import { Button } from '../../Button'
import { TextField } from '../../TextField'

type Address = {
  address1?: string
  address2?: string
  city?: string
  state?: string
  zip?: string
  phone?: string
}

interface ResidentialInfoProps {
  /** Function to call when user submits the address form */
  onSubmit: FormEventHandler
  /** Information to prepopulate */
  address?: Address
}

const defaultProps = {
  address: {
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: null,
    phone: null,
  },
}

/**
 * Where users give us their address.
 * @visibleName Residential information
 */
export function ResidentialInfo(props: ResidentialInfoProps) {
  const formRef = useRef<HTMLFormElement>()
  const [address, replaceAddress] = useState<Address>(
    Object.assign(defaultProps.address, props.address)
  )
  function setField<T extends keyof Address>(fieldName: T) {
    return (e: ChangeEvent<HTMLInputElement>) =>
      replaceAddress({ ...address, [fieldName]: e.target.value })
  }

  const isValid = useMemo(
    () => formRef.current && formRef.current.checkValidity(),
    [address]
  )

  return (
    <main sx={{ px: 3, py: 4 }}>
      <h1 sx={{ variant: 'type.title', mb: 2 }}>Where do you live?</h1>
      <Flex
        as="form"
        onSubmit={props.onSubmit}
        sx={{
          flexFlow: 'column nowrap',
        }}
        data-testid="residential-info-form"
        ref={(ref: any) => {
          formRef.current = ref
        }}
      >
        <TextField
          label="Address"
          name="address1"
          autoComplete="address-line1"
          required
          sx={{ mb: 2 }}
          onChange={setField('address1')}
        />

        <TextField
          label="Apartment, suite, or building (optional)"
          name="address2"
          autoComplete="address-line2"
          sx={{ mb: 2 }}
          onChange={setField('address2')}
        />

        <TextField
          label="City"
          name="city"
          autoComplete="address-level2"
          required
          sx={{ mb: 2 }}
          onChange={setField('city')}
        />

        <Flex sx={{ flexFlow: 'row nowrap', mb: 2 }}>
          <TextField
            label="State"
            name="state"
            autoComplete="address-level3"
            required
            sx={{ flex: 2, mr: 1 }}
            onChange={setField('state')}
            /* TODO add dataset */
          />
          <TextField
            label="ZIP"
            name="zip"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={5}
            autoComplete="postal-code"
            required
            onChange={setField('zip')}
            sx={{
              flex: 1,
            }}
          />
        </Flex>

        <TextField
          label="Phone number"
          name="phone"
          inputMode="tel"
          autoComplete="mobile tel"
          required
          sx={{ mb: 2 }}
          onChange={setField('phone')}
        />
        <Flex
          onClick={() =>
            !isValid && formRef.current && formRef.current.reportValidity()
          }
        >
          <Button
            variant="primary"
            type="submit"
            disabled={!isValid}
            sx={{ flex: 1 }}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </main>
  )
}
