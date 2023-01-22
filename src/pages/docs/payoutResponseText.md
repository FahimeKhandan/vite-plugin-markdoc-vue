
{% table %}

- name {% width="50%" %}
- Type  {% colspan=2 %}
- Status  {% align="right" %}
---
- amount
- integer
- required
---
- iban
- string
- required
---
- track_id
- string 
- required
---
- payment_number
- integer
- optional
---
- notify_url
- string
- optional
---
- description
- string
- optional
---
- is_instant
- boolean
- optional
---
- type
- string
- optional
{% /table %}
