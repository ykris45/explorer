/*
Copyright 2018 - 2022 The Alephium Authors
This file is part of the alephium project.

The library is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

The library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with the library. If not, see <http://www.gnu.org/licenses/>.
*/

import { TransactionInfoType } from '@alephium/sdk'
import { colord } from 'colord'
import { RiArrowDownLine, RiArrowLeftRightLine, RiArrowUpLine, RiRepeat2Line } from 'react-icons/ri'
import { DefaultTheme, useTheme } from 'styled-components'

import LoadingSpinner from '@/components/LoadingSpinner'

export const getTransactionUI = (infoType: TransactionInfoType, theme: DefaultTheme) => ({
  label: {
    in: 'Incoming transfer',
    out: 'Outgoing transfer',
    move: 'Self transfer',
    pending: 'Pending',
    swap: 'dApp operation'
  }[infoType],
  Icon: {
    in: RiArrowDownLine,
    out: RiArrowUpLine,
    move: RiArrowLeftRightLine,
    pending: LoadingSpinner,
    swap: RiRepeat2Line
  }[infoType],
  iconColor: {
    in: theme.global.valid,
    out: theme.font.highlight,
    move: theme.font.secondary,
    pending: theme.font.secondary,
    swap: theme.global.complementary
  }[infoType],
  iconBgColor: {
    in: colord(theme.global.valid).alpha(0.12).toRgbString(),
    out: colord(theme.font.highlight).alpha(0.12).toRgbString(),
    move: colord(theme.font.secondary).alpha(0.12).toRgbString(),
    pending: colord(theme.font.secondary).alpha(0.12).toRgbString(),
    swap: colord(theme.global.complementary).alpha(0.12).toRgbString()
  }[infoType],
  badgeText: {
    move: 'inside',
    out: 'to',
    swap: 'with',
    pending: '...',
    in: 'from'
  }[infoType]
})

export const useTransactionUI = (infoType: TransactionInfoType) => {
  const theme = useTheme()

  return getTransactionUI(infoType, theme)
}
