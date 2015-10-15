class InviteByMail < ActionMailer::Base
  default from: '"GioWine" <info@giowine.com>'

  def breakfast(email)
    mail( to:email,
          template_name:'empty',
          subject:'Come to our breakfast !')

    # I you have created a template on Mandrillapp (mailchimp)
    # headers['X-MC-Template'] = 'breakfast_19_october_2015'

    # If you have a variable in your template
    # Hello *|NAME|*
    # headers['X-MC-MergeVars'] = '{"name":"' + name.capitalize + '"}'

    # Because we want to know if the mail is opened and
    # if the receiver clicks on a link inside
    headers['X-MC-Track'] = 'opens, clicks'
  end
end
