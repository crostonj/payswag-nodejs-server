'use strict';

exports.paymentGET = function(args, res, next) {
  /**
   * Payment
   * Get a payment
   *
   * body_id Payment  (optional)
   * returns starspayment
   **/
  var examples = {};
  examples['application/json'] = {
  "NoteID" : 123,
  "DueDay" : 123,
  "PaymentNotes" : "aeiou",
  "Description" : "aeiou",
  "LenderID" : "aeiou",
  "IsDuplicate" : "aeiou",
  "SourceType" : "aeiou",
  "PaymentID" : 123,
  "Fees" : 123,
  "PaymentAmount" : "aeiou",
  "AccountType" : "aeiou",
  "ConfirmationNumber" : 123,
  "DuplicateMessage" : "aeiou",
  "AccountNumber" : "aeiou",
  "Interest" : 123,
  "ParticipantID" : "aeiou",
  "NoteDate" : "aeiou",
  "RoutingNumber" : "aeiou",
  "ReceivedDate" : "aeiou",
  "Description1" : "aeiou",
  "NoteIDList" : "aeiou",
  "Principal" : 123,
  "EffectiveDate" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

