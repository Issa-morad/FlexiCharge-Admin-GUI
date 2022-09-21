import { ManageTransaction } from '../remote-access/types';

export const manageTransactions: ManageTransaction[] = [
  {
    transactionID: 5,
    isKlarnaPayment: true,
    kwhTransfered: 50,
    currentChargePercentage: 20,
    pricePerKwh: 500,
    timestamp: 1663163478,
    paymentID: null,
    userID: 1,
    session_id: "02bfc684-f168-480f-8bfd-e95c2cdea66a",
    client_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjgyMzA1ZWJjLWI4MTEtMzYzNy1hYTRjLTY2ZWNhMTg3NGYzZCJ9.eyJzZXNzaW9uX2lkIjoiMDJiZmM2ODQtZjE2OC00ODBmLThiZmQtZTk1YzJjZGVhNjZhIiwiYmFzZV91cmwiOiJodHRwczovL2pzLnBsYXlncm91bmQua2xhcm5hLmNvbS9ldS9rcCIsImRlc2lnbiI6ImtsYXJuYSIsImxhbmd1YWdlIjoic3YiLCJwdXJjaGFzZV9jb3VudHJ5IjoiU0UiLCJlbnZpcm9ubWVudCI6InBsYXlncm91bmQiLCJtZXJjaGFudF9uYW1lIjoiWW91ciBidXNpbmVzcyBuYW1lIiwic2Vzc2lvbl90eXBlIjoiUEFZTUVOVFMiLCJjbGllbnRfZXZlbnRfYmFzZV91cmwiOiJodHRwczovL2V1LnBsYXlncm91bmQua2xhcm5hZXZ0LmNvbSIsInNjaGVtZSI6dHJ1ZSwiZXhwZXJpbWVudHMiOlt7Im5hbWUiOiJrcGMtUFNFTC0zMDk5IiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImtwLWNsaWVudC11dG9waWEtcG9wdXAtcmV0cmlhYmxlIiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImtwLWNsaWVudC11dG9waWEtc3RhdGljLXdpZGdldCIsInZhcmlhdGUiOiJpbmRleCIsInBhcmFtZXRlcnMiOnsiZHluYW1pYyI6InRydWUifX0seyJuYW1lIjoiaW4tYXBwLXNkay1uZXctaW50ZXJuYWwtYnJvd3NlciIsInBhcmFtZXRlcnMiOnsidmFyaWF0ZV9pZCI6Im5ldy1pbnRlcm5hbC1icm93c2VyLWVuYWJsZSJ9fSx7Im5hbWUiOiJrcC1jbGllbnQtdXRvcGlhLXNkay1mbG93IiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImtwLWNsaWVudC11dG9waWEtd2Vidmlldy1mbG93IiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImluLWFwcC1zZGstY2FyZC1zY2FubmluZyIsInBhcmFtZXRlcnMiOnsidmFyaWF0ZV9pZCI6ImNhcmQtc2Nhbm5pbmctZW5hYmxlIn19XSwicmVnaW9uIjoiZXUiLCJ2ZXJzaW9uIjoidjEuMTAuMC0xMTg2LWc2YmY3NjY2OCJ9.dIbc_LwaNDV4P49Z55Uqqv-gCt7onXyi__d7Mssk7XyZmP4A_9KikHyBIsNdwPx4fpeTonjSZtc3tGkPCnLPMbw6rKEeTDhROvFDuMsOVotK-e_6sEqmsQAgDUp4a9sokLrL16gXY1ug9RB2lusw_dbxSN8iVGi2Lnq0LZlY15ung_PH94k-WCJTRkZH4aTUnKPqKXn7zGoSE2RAThR5ZT7FLF_Bb1dhfLFyp3Qy1Btz-Rd6x1e-IzqNDDxhiyjFDb42XyL9NGpW0EEQCGKHyB4vPEIPiSECpifOhVM_8ZTrmgLrGJLs5Y6JZx3MJKIfWB9bKsx1vRlfOrE8CxDf4A",
    paymentConfirmed: false,
    meterStart: null,
    chargerID: 100009
  },
  {
    transactionID: 6,
    isKlarnaPayment: true,
    kwhTransfered: 200,
    currentChargePercentage: 20,
    pricePerKwh: 7500.00,
    timestamp: 1663163478,
    paymentID: null,
    userID: 1,
    session_id: "02bfc684-f168-480f-8bfd-e95c2cdea66a",
    client_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjgyMzA1ZWJjLWI4MTEtMzYzNy1hYTRjLTY2ZWNhMTg3NGYzZCJ9.eyJzZXNzaW9uX2lkIjoiMDJiZmM2ODQtZjE2OC00ODBmLThiZmQtZTk1YzJjZGVhNjZhIiwiYmFzZV91cmwiOiJodHRwczovL2pzLnBsYXlncm91bmQua2xhcm5hLmNvbS9ldS9rcCIsImRlc2lnbiI6ImtsYXJuYSIsImxhbmd1YWdlIjoic3YiLCJwdXJjaGFzZV9jb3VudHJ5IjoiU0UiLCJlbnZpcm9ubWVudCI6InBsYXlncm91bmQiLCJtZXJjaGFudF9uYW1lIjoiWW91ciBidXNpbmVzcyBuYW1lIiwic2Vzc2lvbl90eXBlIjoiUEFZTUVOVFMiLCJjbGllbnRfZXZlbnRfYmFzZV91cmwiOiJodHRwczovL2V1LnBsYXlncm91bmQua2xhcm5hZXZ0LmNvbSIsInNjaGVtZSI6dHJ1ZSwiZXhwZXJpbWVudHMiOlt7Im5hbWUiOiJrcGMtUFNFTC0zMDk5IiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImtwLWNsaWVudC11dG9waWEtcG9wdXAtcmV0cmlhYmxlIiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImtwLWNsaWVudC11dG9waWEtc3RhdGljLXdpZGdldCIsInZhcmlhdGUiOiJpbmRleCIsInBhcmFtZXRlcnMiOnsiZHluYW1pYyI6InRydWUifX0seyJuYW1lIjoiaW4tYXBwLXNkay1uZXctaW50ZXJuYWwtYnJvd3NlciIsInBhcmFtZXRlcnMiOnsidmFyaWF0ZV9pZCI6Im5ldy1pbnRlcm5hbC1icm93c2VyLWVuYWJsZSJ9fSx7Im5hbWUiOiJrcC1jbGllbnQtdXRvcGlhLXNkay1mbG93IiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImtwLWNsaWVudC11dG9waWEtd2Vidmlldy1mbG93IiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImluLWFwcC1zZGstY2FyZC1zY2FubmluZyIsInBhcmFtZXRlcnMiOnsidmFyaWF0ZV9pZCI6ImNhcmQtc2Nhbm5pbmctZW5hYmxlIn19XSwicmVnaW9uIjoiZXUiLCJ2ZXJzaW9uIjoidjEuMTAuMC0xMTg2LWc2YmY3NjY2OCJ9.dIbc_LwaNDV4P49Z55Uqqv-gCt7onXyi__d7Mssk7XyZmP4A_9KikHyBIsNdwPx4fpeTonjSZtc3tGkPCnLPMbw6rKEeTDhROvFDuMsOVotK-e_6sEqmsQAgDUp4a9sokLrL16gXY1ug9RB2lusw_dbxSN8iVGi2Lnq0LZlY15ung_PH94k-WCJTRkZH4aTUnKPqKXn7zGoSE2RAThR5ZT7FLF_Bb1dhfLFyp3Qy1Btz-Rd6x1e-IzqNDDxhiyjFDb42XyL9NGpW0EEQCGKHyB4vPEIPiSECpifOhVM_8ZTrmgLrGJLs5Y6JZx3MJKIfWB9bKsx1vRlfOrE8CxDf4A",
    paymentConfirmed: false,
    meterStart: null,
    chargerID: 100011
  },
  {
    transactionID: 7,
    isKlarnaPayment: true,
    kwhTransfered: 1050,
    currentChargePercentage: 20,
    pricePerKwh: 7500.00,
    timestamp: 1663163478,
    paymentID: null,
    userID: 1,
    session_id: "02bfc684-f168-480f-8bfd-e95c2cdea66a",
    client_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjgyMzA1ZWJjLWI4MTEtMzYzNy1hYTRjLTY2ZWNhMTg3NGYzZCJ9.eyJzZXNzaW9uX2lkIjoiMDJiZmM2ODQtZjE2OC00ODBmLThiZmQtZTk1YzJjZGVhNjZhIiwiYmFzZV91cmwiOiJodHRwczovL2pzLnBsYXlncm91bmQua2xhcm5hLmNvbS9ldS9rcCIsImRlc2lnbiI6ImtsYXJuYSIsImxhbmd1YWdlIjoic3YiLCJwdXJjaGFzZV9jb3VudHJ5IjoiU0UiLCJlbnZpcm9ubWVudCI6InBsYXlncm91bmQiLCJtZXJjaGFudF9uYW1lIjoiWW91ciBidXNpbmVzcyBuYW1lIiwic2Vzc2lvbl90eXBlIjoiUEFZTUVOVFMiLCJjbGllbnRfZXZlbnRfYmFzZV91cmwiOiJodHRwczovL2V1LnBsYXlncm91bmQua2xhcm5hZXZ0LmNvbSIsInNjaGVtZSI6dHJ1ZSwiZXhwZXJpbWVudHMiOlt7Im5hbWUiOiJrcGMtUFNFTC0zMDk5IiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImtwLWNsaWVudC11dG9waWEtcG9wdXAtcmV0cmlhYmxlIiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImtwLWNsaWVudC11dG9waWEtc3RhdGljLXdpZGdldCIsInZhcmlhdGUiOiJpbmRleCIsInBhcmFtZXRlcnMiOnsiZHluYW1pYyI6InRydWUifX0seyJuYW1lIjoiaW4tYXBwLXNkay1uZXctaW50ZXJuYWwtYnJvd3NlciIsInBhcmFtZXRlcnMiOnsidmFyaWF0ZV9pZCI6Im5ldy1pbnRlcm5hbC1icm93c2VyLWVuYWJsZSJ9fSx7Im5hbWUiOiJrcC1jbGllbnQtdXRvcGlhLXNkay1mbG93IiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImtwLWNsaWVudC11dG9waWEtd2Vidmlldy1mbG93IiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImluLWFwcC1zZGstY2FyZC1zY2FubmluZyIsInBhcmFtZXRlcnMiOnsidmFyaWF0ZV9pZCI6ImNhcmQtc2Nhbm5pbmctZW5hYmxlIn19XSwicmVnaW9uIjoiZXUiLCJ2ZXJzaW9uIjoidjEuMTAuMC0xMTg2LWc2YmY3NjY2OCJ9.dIbc_LwaNDV4P49Z55Uqqv-gCt7onXyi__d7Mssk7XyZmP4A_9KikHyBIsNdwPx4fpeTonjSZtc3tGkPCnLPMbw6rKEeTDhROvFDuMsOVotK-e_6sEqmsQAgDUp4a9sokLrL16gXY1ug9RB2lusw_dbxSN8iVGi2Lnq0LZlY15ung_PH94k-WCJTRkZH4aTUnKPqKXn7zGoSE2RAThR5ZT7FLF_Bb1dhfLFyp3Qy1Btz-Rd6x1e-IzqNDDxhiyjFDb42XyL9NGpW0EEQCGKHyB4vPEIPiSECpifOhVM_8ZTrmgLrGJLs5Y6JZx3MJKIfWB9bKsx1vRlfOrE8CxDf4A",
    paymentConfirmed: false,
    meterStart: null,
    chargerID: 100007
  },
  {
    transactionID: 8,
    isKlarnaPayment: true,
    kwhTransfered: 543,
    currentChargePercentage: 20,
    pricePerKwh: 7500.00,
    timestamp: 1663163478,
    paymentID: null,
    userID: 1,
    session_id: "02bfc684-f168-480f-8bfd-e95c2cdea66a",
    client_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjgyMzA1ZWJjLWI4MTEtMzYzNy1hYTRjLTY2ZWNhMTg3NGYzZCJ9.eyJzZXNzaW9uX2lkIjoiMDJiZmM2ODQtZjE2OC00ODBmLThiZmQtZTk1YzJjZGVhNjZhIiwiYmFzZV91cmwiOiJodHRwczovL2pzLnBsYXlncm91bmQua2xhcm5hLmNvbS9ldS9rcCIsImRlc2lnbiI6ImtsYXJuYSIsImxhbmd1YWdlIjoic3YiLCJwdXJjaGFzZV9jb3VudHJ5IjoiU0UiLCJlbnZpcm9ubWVudCI6InBsYXlncm91bmQiLCJtZXJjaGFudF9uYW1lIjoiWW91ciBidXNpbmVzcyBuYW1lIiwic2Vzc2lvbl90eXBlIjoiUEFZTUVOVFMiLCJjbGllbnRfZXZlbnRfYmFzZV91cmwiOiJodHRwczovL2V1LnBsYXlncm91bmQua2xhcm5hZXZ0LmNvbSIsInNjaGVtZSI6dHJ1ZSwiZXhwZXJpbWVudHMiOlt7Im5hbWUiOiJrcGMtUFNFTC0zMDk5IiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImtwLWNsaWVudC11dG9waWEtcG9wdXAtcmV0cmlhYmxlIiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImtwLWNsaWVudC11dG9waWEtc3RhdGljLXdpZGdldCIsInZhcmlhdGUiOiJpbmRleCIsInBhcmFtZXRlcnMiOnsiZHluYW1pYyI6InRydWUifX0seyJuYW1lIjoiaW4tYXBwLXNkay1uZXctaW50ZXJuYWwtYnJvd3NlciIsInBhcmFtZXRlcnMiOnsidmFyaWF0ZV9pZCI6Im5ldy1pbnRlcm5hbC1icm93c2VyLWVuYWJsZSJ9fSx7Im5hbWUiOiJrcC1jbGllbnQtdXRvcGlhLXNkay1mbG93IiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImtwLWNsaWVudC11dG9waWEtd2Vidmlldy1mbG93IiwidmFyaWF0ZSI6InZhcmlhdGUtMSJ9LHsibmFtZSI6ImluLWFwcC1zZGstY2FyZC1zY2FubmluZyIsInBhcmFtZXRlcnMiOnsidmFyaWF0ZV9pZCI6ImNhcmQtc2Nhbm5pbmctZW5hYmxlIn19XSwicmVnaW9uIjoiZXUiLCJ2ZXJzaW9uIjoidjEuMTAuMC0xMTg2LWc2YmY3NjY2OCJ9.dIbc_LwaNDV4P49Z55Uqqv-gCt7onXyi__d7Mssk7XyZmP4A_9KikHyBIsNdwPx4fpeTonjSZtc3tGkPCnLPMbw6rKEeTDhROvFDuMsOVotK-e_6sEqmsQAgDUp4a9sokLrL16gXY1ug9RB2lusw_dbxSN8iVGi2Lnq0LZlY15ung_PH94k-WCJTRkZH4aTUnKPqKXn7zGoSE2RAThR5ZT7FLF_Bb1dhfLFyp3Qy1Btz-Rd6x1e-IzqNDDxhiyjFDb42XyL9NGpW0EEQCGKHyB4vPEIPiSECpifOhVM_8ZTrmgLrGJLs5Y6JZx3MJKIfWB9bKsx1vRlfOrE8CxDf4A",
    paymentConfirmed: false,
    meterStart: null,
    chargerID: 100008
  },
];